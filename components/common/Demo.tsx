import {Layouts, Responsive, WidthProvider} from 'react-grid-layout';
import {Card, Icon} from "@blueprintjs/core";
import React, {PropsWithChildren, useEffect, useState} from "react";
import {getFromLS, saveToLS} from "../util/grid";

const ResponsiveGridLayout = WidthProvider(Responsive);

export type DemoItem<T> = {
  name: string
  Pane: React.ComponentType<T>
}

export type Props<T> = PropsWithChildren<{
  name: string
  itemProps: T
  items: DemoItem<T>[]
}>

export const Demo = <T, >(props: Props<T>) => {
  const [layouts, setLayouts] = useState<Layouts>({})
  useEffect(() => setLayouts(getFromLS(props.name)), [])
  useEffect(() => saveToLS(props.name, layouts), [layouts])
  return (
    <div>
      {props.children}
      <ResponsiveGridLayout className={''}
                            compactType={'vertical'}
                            layouts={layouts}
                            rowHeight={100}
                            draggableHandle={'.drag-handle'}
                            cols={{lg: 12, md: 12, sm: 6, xs: 2, xxs: 1}}
                            onLayoutChange={(_, ls) => setLayouts(ls)}
      >
        {props.items.map(({name, Pane}, index) => (
          <div key={name} data-grid={{w: 6, h: 4, x: (index % 2) * 6, y: index / 2}}>
            <Card className={'w-full h-full relative p-1 flex flex-col'} elevation={2}>
              <Icon icon={'move'} className={'absolute right-2 top-2 cursor-move drag-handle'}/>
              <div className={'text-2xl text-center'}>{name}</div>
              <div className={'flex-grow w-full relative overflow-auto'}>
                <Pane {...props.itemProps}/>
              </div>
            </Card>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  )
}