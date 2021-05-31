import {Bar} from 'react-chartjs-2';
import {BarProps, Data} from "./data";
import {getColor} from "../../util/palette";
import {useMemo} from "react";

export const ChartJSBar = ({data}: BarProps) => {
  const dataValue = useMemo(() => ({
    labels: data.map(d => d.name),
    datasets: (['pv', 'uv'] as (keyof Data)[]).map((k, i) => (
      {
        label: k,
        data: data.map(e => e[k]),
        borderColor: getColor(0, i),
        backgroundColor: getColor(0, i),
      }
    )),
  }), [data])
  return (
    <div className={'relative h-full'}>
      <Bar
        data={dataValue}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
        type={'bar'}/>
    </div>
  )
}