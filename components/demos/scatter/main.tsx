import {Button, NumericInput} from "@blueprintjs/core";
import {Recharts} from "./Recharts";
import {useCallback, useEffect, useState} from "react";
import {ChartJS} from "./ChartJS";
import {ECharts} from "./ECharts";
import dynamic from 'next/dynamic'
import {Victory} from "./Victory";
import {Data, generateData} from "./data";
import {Demo} from "../../common/Demo";

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
  const [data, setData] = useState<Data[]>(() => generateData(1, 1))
  const [type, setType] = useState(3)
  const [count, setCount] = useState(100)
  const onRandomData = useCallback(() => {
    setData(generateData(type, count))
  }, [type, count])
  useEffect(() => onRandomData(), [])
  return (
    <Demo name={'Scatter'} itemProps={{data}} items={charts}>
      <div className={'flex pl-2'}>
        <Button text={'regenerate'} icon={'refresh'} onClick={onRandomData}/>
        <div className={'flex flex-row items-center mx-2'}>
          DataSet:
          <NumericInput value={type} onValueChange={v => setType(v)} min={1}/>
        </div>
        <div className={'flex flex-row items-center mx-2'}>
          Point Count:
          <NumericInput value={count} onValueChange={v => setCount(v)} min={1}/>
        </div>
      </div>
    </Demo>
  )
}