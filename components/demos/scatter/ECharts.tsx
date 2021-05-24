import ReactECharts from 'echarts-for-react';
import {EChartOption} from 'echarts'
import {ScatterDemoProps} from "./data";
import {groupBy} from "../../util/array";

export const ECharts = ({data}: ScatterDemoProps) => {
  const grouped = Array.from(groupBy(data, e => e.type).entries());
  return (
    <ReactECharts
      notMerge
      className={'h-full w-full'}
      option={{
        xAxis: {},
        yAxis: {},
        tooltip: {},
        legend:{},
        series: grouped.map(([group, values]) => ({
          symbolSize: 8,
          data: values.map(e => [e.x, e.y]),
          name: group,
          type: 'scatter'
        })),
      } as EChartOption}
    />
  )
}