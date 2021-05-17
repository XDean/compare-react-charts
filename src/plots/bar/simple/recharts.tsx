import React from 'react';
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {data} from "./data";


export const Recharts = () => (
  <div style={{width: '100%', height: '95vh'}}>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={100}
        height={100}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey="pv" fill="#8884d8"/>
        <Bar dataKey="uv" fill="#82ca9d"/>
      </BarChart>
    </ResponsiveContainer>
  </div>
)
