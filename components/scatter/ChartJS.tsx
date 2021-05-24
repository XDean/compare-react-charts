import {Scatter} from 'react-chartjs-2';
import {ScatterDemoProps} from "./data";
import {getColor} from "../util/palette";
import {groupBy} from "../util/array";

export const ChartJS = ({data}: ScatterDemoProps) => {
  const grouped = Array.from(groupBy(data, e => e.type).entries());
  return (
    <div className={'relative h-full'}>
      <Scatter
        data={{
          labels: data.map(d => d.type),
          datasets: grouped.map(([type, values], i) => (
            {
              label: type,
              data: values.map(e => ({x: e.x, y: e.y})),
              borderColor: getColor(0, i),
              backgroundColor: getColor(0, i),
            }
          )),
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
        type={'scatter'}/>
    </div>
  )
}