import {Responsive, WidthProvider} from 'react-grid-layout';
import {Card} from "@blueprintjs/core";

const ResponsiveGridLayout = WidthProvider(Responsive);

export const BarDemo = () => {
  return (
    <ResponsiveGridLayout className={''} verticalCompact={false}>
      <div key={'1'}><Card className={'w-full h-full'} elevation={2}>1</Card></div>
      <div key={'2'}><Card className={'w-full h-full'} elevation={2}>2</Card></div>
      <div key={'3'}><Card className={'w-full h-full'} elevation={2}>3</Card></div>
    </ResponsiveGridLayout>
  )
}