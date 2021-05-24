import {VictoryBar, VictoryChart, VictoryGroup, VictoryTooltip} from "victory";
import {BarProps, Data} from "./data";

export const VictoryBarDemo = ({data}: BarProps) => {
  return (
    <VictoryChart>
      <VictoryGroup
        offset={15}
        colorScale={"qualitative"}
      >
        {(['pv', 'uv'] as (keyof Data)[]).map(k => (
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