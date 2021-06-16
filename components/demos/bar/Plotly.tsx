import React from 'react';
import {BarProps, Data} from "./data";
import dynamic from "next/dynamic";

const Plotly = dynamic(
  async () => await import('react-plotly.js'),
  {
    ssr: false,
  })

export const PlotlyBar = ({data}: BarProps) => {
  return (
    <Plotly
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