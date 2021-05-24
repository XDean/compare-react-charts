import React from 'react';
import Plot from 'react-plotly.js';
import {ScatterDemoProps} from "./data";
import {groupBy} from "../../util/array";

export const Plotly = ({data}: ScatterDemoProps) => {
  const grouped = Array.from(groupBy(data, e => e.type).entries());
  return (
    <Plot
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