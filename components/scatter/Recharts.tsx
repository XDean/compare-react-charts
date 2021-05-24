import {CartesianGrid, Legend, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis} from 'recharts';
import {ScatterDemoProps} from "./data";
import {groupBy} from "../util/array";
import {getColor} from "../util/palette";

export const Recharts = ({data}: ScatterDemoProps) => {
  const grouped = Array.from(groupBy(data, e => e.type).entries());
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey={'x'} type={'number'}/>
        <YAxis dataKey={'y'} type={'number'}/>
        <Tooltip/>
        <Legend/>
        {grouped.map(([group, values], i) => (
          <Scatter data={values} name={group} key={group} fill={getColor(0, i)}/>
        ))}
      </ScatterChart>
    </ResponsiveContainer>
  );
}