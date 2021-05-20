import {Layouts, Responsive, WidthProvider} from 'react-grid-layout';
import {Card, Icon} from "@blueprintjs/core";
import {RechartsBar} from "./Recharts";
import {useEffect, useState} from "react";
import {getFromLS, saveToLS} from "../util/grid";

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
      <div key={'Recharts'}>
        <Card className={'w-full h-full relative p-1 flex flex-col'} elevation={2}>
          <Icon icon={'move'} className={'absolute right-2 top-2 cursor-move drag'}/>
          <div className={'text-2xl text-center'}>Recharts</div>
          <div className={'flex-grow w-full'}>
            <RechartsBar/>
          </div>
        </Card>
      </div>
      <div key={'2'}><Card className={'drag w-full h-full'} elevation={2}>2</Card></div>
      <div key={'3'}><Card className={'drag w-full h-full'} elevation={2}>3</Card></div>
    </ResponsiveGridLayout>
  )
}