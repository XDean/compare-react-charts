import {VictoryChart, VictoryGroup, VictoryScatter} from "components/demos/scatter/Victory";
import {ScatterDemoProps} from "./data";
import {groupBy} from "../../util/array";
import {getColor} from "../../util/palette";

export const Victory = ({data}: ScatterDemoProps) => {
  const grouped = Array.from(groupBy(data, e => e.type).entries());
  return (
    <VictoryChart>
      <VictoryGroup
        offset={15}
        colorScale={"qualitative"}
      >
        {grouped.map(([group, values], i) => (
          <VictoryScatter key={group}
                          data={values}
                          style={{data: {fill: getColor(0, i)}}}/>
        ))}
      </VictoryGroup>
    </VictoryChart>
  )
}