import React from 'react';
import Plot from 'react-plotly.js';
import {BarProps, Data} from "./data";

export const PlotlyBar = ({data}: BarProps) => {
  return (
    <Plot
      data={
        (['pv', 'uv'] as (keyof Data)[]).map(k => (
          {
            x: data.map(e => e.name),
            y: data.map(e => e[k]),
            name: k,
            type: 'bar',
          }
        ))
      }
      layout={{}}
      config={{responsive: true, displayModeBar: false}}
    />
  )
}