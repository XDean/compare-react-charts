import {VictoryBar, VictoryChart, VictoryGroup, VictoryTooltip} from "victory";
import {data} from "./data";

export const VictoryBarDemo = () => {
  return (
    <VictoryChart>
      <VictoryGroup
        offset={15}
        colorScale={"qualitative"}
      >
        {(['pv', 'uv'] as (keyof typeof data[number])[]).map(k => (
          <VictoryBar
            key={k}
            labelComponent={<VictoryTooltip/>}
            data={data}
            x={'name'}
            y={k}
          />
        ))}
      </VictoryGroup>
    </VictoryChart>
  )
}