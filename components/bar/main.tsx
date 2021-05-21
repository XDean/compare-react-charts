import {Layouts, Responsive, WidthProvider} from 'react-grid-layout';
import {Card, Icon} from "@blueprintjs/core";
import {RechartsBar} from "./Recharts";
import {useEffect, useState} from "react";
import {getFromLS, saveToLS} from "../util/grid";
import {ChartJSBar} from "./ChartJS";
import {EChartsBar} from "./ECharts";

const ResponsiveGridLayout = WidthProvider(Responsive);

const charts = [
  {name: 'Recharts', Pane: RechartsBar},
  {name: 'ChartJS', Pane: ChartJSBar},
  {name: 'ECharts', Pane: EChartsBar}
]

export const BarDemo = () => {
  const [layouts, setLayouts] = useState<Layouts>({})
  useEffect(() => setLayouts(getFromLS('Bar')), [])
  useEffect(() => saveToLS('Bar', layouts), [layouts])
  return (
    <ResponsiveGridLayout className={''}
                          compactType={'vertical'}
                          layouts={layouts}
                          rowHeight={100}
                          draggableHandle={'.drag'}
                          cols={{lg: 12, md: 12, sm: 6, xs: 2, xxs: 1}}
                          onLayoutChange={(_, ls) => setLayouts(ls)}
    >
      {charts.map(({name, Pane}, index) => (
        <div key={name} data-grid={{w: 6, h: 4, x: (index % 2) * 6, y: index / 2}}>
          <Card className={'w-full h-full relative p-1 flex flex-col'} elevation={2}>
            <Icon icon={'move'} className={'absolute right-2 top-2 cursor-move drag'}/>
            <div className={'text-2xl text-center'}>{name}</div>
            <div className={'flex-grow w-full relative overflow-auto'}>
              <Pane/>
            </div>
          </Card>
        </div>
      ))}
    </ResponsiveGridLayout>
  )
}