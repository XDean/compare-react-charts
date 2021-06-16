import {Button} from "@blueprintjs/core";
import {RechartsBar} from "./Recharts";
import {useState} from "react";
import {ChartJSBar} from "./ChartJS";
import {EChartsBar} from "./ECharts";
import {VictoryBarDemo} from "./Victory";
import {Data, generateData} from "./data";
import {Demo} from "../../common/Demo";
import {PlotlyBar} from "./Plotly";

const charts = [
  {name: 'Recharts', Pane: RechartsBar},
  {name: 'ChartJS', Pane: ChartJSBar},
  {name: 'ECharts', Pane: EChartsBar},
  {name: 'Plotly', Pane: PlotlyBar},
  {name: 'Victory', Pane: VictoryBarDemo}
]

export const BarDemo = () => {
  const [data, setData] = useState<Data[]>(generateData)
  return (
    <Demo name={'Bar'} itemProps={{data}} items={charts}>
      <div className={'flex pl-2'}>
        <Button text={'regenerate'} icon={'refresh'} onClick={() => setData(generateData())}/>
      </div>
    </Demo>
  )
}