import React from 'react';
import Plot from 'react-plotly.js';
import {data} from "./data";

export const PlotlyBar = () => {
  return (
    <Plot
      data={
        (['pv', 'uv'] as (keyof typeof data[number])[]).map(k => (
          {
            x: data.map(e => e.name),
            y: data.map(e => e[k]),
            type: 'bar',
          }
        ))
      }
      layout={{}}
      config={{responsive: true, displayModeBar: false}}
    />
  )
}