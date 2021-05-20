import {Bar} from 'react-chartjs-2';
import {data} from "./data";
import {getColor} from "../util/palette";

export const ChartJSBar = () => {
  return (
    <div className={'relative h-full'}>
      <Bar
        data={{
          labels: data.map(d => d.name),
          datasets: (['pv', 'uv'] as (keyof typeof data[number])[]).map((k, i) => (
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
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
        type={'bar'}/>
    </div>
  )
}