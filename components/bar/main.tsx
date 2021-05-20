import {Layouts, Responsive, WidthProvider} from 'react-grid-layout';
import {Card, Icon} from "@blueprintjs/core";
import {RechartsBar} from "./Recharts";
import {useEffect, useState} from "react";
import {getFromLS, saveToLS} from "../util/grid";
import {ChartJSBar} from "./ChartJS";

const ResponsiveGridLayout = WidthProvider(Responsive);

export const BarDemo = () => {
  const [layouts, setLayouts] = useState<Layouts>({})
  useEffect(() => setLayouts(getFromLS('Bar')), [])
  useEffect(() => saveToLS('Bar', layouts), [layouts])
  return (
    <ResponsiveGridLayout className={''}
                          compactType={'vertical'}
                          layouts={layouts}
                          draggableHandle={'.drag'}
                          onLayoutChange={(_, ls) => setLayouts(ls)}
    >
      {[
        {name: 'Recharts', pane: <RechartsBar/>},
        {name: 'ChartJS', pane: <ChartJSBar/>},
      ].map(({name, pane}) => (
        <div key={name}>
          <Card className={'w-full h-full relative p-1 flex flex-col'} elevation={2}>
            <Icon icon={'move'} className={'absolute right-2 top-2 cursor-move drag'}/>
            <div className={'text-2xl text-center'}>{name}</div>
            <div className={'flex-grow w-full relative'}>
                {pane}
            </div>
          </Card>
        </div>
      ))}
    </ResponsiveGridLayout>
  )
}