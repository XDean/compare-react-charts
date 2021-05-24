import ReactECharts from 'echarts-for-react';
import {EChartOption} from 'echarts'
import {BarProps, Data} from "./data";

export const EChartsBar = ({data}:BarProps) => {
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
        tooltip: {},
        series: (['pv', 'uv'] as (keyof Data)[]).map(k => ({
          data: data.map(e => e[k]),
          type: 'bar',
          name: k
        })),
      } as EChartOption}
    />
  )
}