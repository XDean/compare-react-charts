import {Button} from "@blueprintjs/core";
import {Recharts} from "./Recharts";
import {useState} from "react";
import {ChartJS} from "./ChartJS";
import {ECharts} from "./ECharts";
import dynamic from 'next/dynamic'
import {Victory} from "./Victory";
import {Data, generateData} from "./data";
import {Demo} from "../common/Demo";

const Plotly = dynamic(import("./Plotly").then(mod => mod.Plotly) as any, {
  ssr: false
}) as any

const charts = [
  {name: 'Recharts', Pane: Recharts},
  {name: 'ChartJS', Pane: ChartJS},
  {name: 'ECharts', Pane: ECharts},
  {name: 'Plotly', Pane: Plotly},
  {name: 'Victory', Pane: Victory}
]

export const ScatterDemo = () => {
  const [data, setData] = useState<Data[]>(generateData)
  return (
    <Demo name={'Bar'} itemProps={{data}} items={charts}>
      <div className={'flex pl-2'}>
        <Button text={'regenerate'} icon={'refresh'} onClick={() => setData(generateData())}/>
      </div>
    </Demo>
  )
}