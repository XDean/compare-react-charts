import ReactECharts from 'echarts-for-react';
import {EChartOption} from 'echarts'
import {data} from "./data";

export const EChartsBar = () => {
  return (
    <ReactECharts
      className={'h-full w-full'}
      option={{
        xAxis: {
          type: 'category',
          data: data.map(e => e.name),
        },
        yAxis: {
          type: 'value'
        },
        series: (['pv', 'uv'] as (keyof typeof data[number])[]).map(k => ({
          data: data.map(e => e[k]),
          type: 'bar',
          name: k
        })),
      } as EChartOption}
    />
  )
}