import React from 'react';
import {ScatterDemoProps} from "./data";
import {groupBy} from "../../util/array";
import dynamic from "next/dynamic";

const Plotly = dynamic(
  async () => await import('react-plotly.js'),
  {
    ssr: false,
  })

export const PlotlyScatter = ({data}: ScatterDemoProps) => {
  const grouped = Array.from(groupBy(data, e => e.type).entries());
  return (
    <Plotly
      data={
        grouped.map(([group, values]) => (
          {
            x: values.map(e => e.x),
            y: values.map(e => e.y),
            name: group,
            type: 'scatter',
            mode: 'markers'
          }
        ))
      }
      layout={{}}
      config={{responsive: true, displayModeBar: false}}
    />
  )
}