import {Bar} from 'react-chartjs-2';
import {BarProps, Data} from "./data";
import {getColor} from "../util/palette";

export const ChartJSBar = ({data}: BarProps) => {
  return (
    <div className={'relative h-full'}>
      <Bar
        data={{
          labels: data.map(d => d.name),
          datasets: (['pv', 'uv'] as (keyof Data)[]).map((k, i) => (
            {
              label: k,
              data: data.map(e => e[k]),
              borderColor: getColor(0, i),
              backgroundColor: getColor(0, i),
            }
          )),
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
        type={'bar'}/>
    </div>
  )
}