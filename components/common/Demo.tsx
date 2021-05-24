import {Layouts, Responsive, WidthProvider} from 'react-grid-layout';
import {Card, Divider, Icon, Switch} from "@blueprintjs/core";
import React, {Profiler, PropsWithChildren, useCallback, useEffect, useState} from "react";
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
            <DemoCard name={name} Pane={Pane} itemProps={props.itemProps}/>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  )
}

const DemoCard = <T, >({name, Pane, itemProps}: DemoItem<T> & { itemProps: T }) => {
  const onRender = useCallback((...args) => {
    console.log(args)
  }, [])
  const [disable, setDisable] = useState(false)
  return (
    <Card className={'w-full h-full relative p-1 flex flex-col'} elevation={2}>
      <Icon icon={'move'}
            className={'absolute right-2 top-2 cursor-move drag-handle'}/>
      <Switch checked={disable}
              onChange={() => setDisable(!disable)}
              label={'disable'}
              className={'absolute left-2 top-2'}/>
      <div className={'text-2xl text-center'}>
        {name}
      </div>
      <Divider/>
      <div className={'flex-grow w-full relative overflow-auto'}>
        {disable ? (
          <div className={'w-full h-full flex flex-row items-center justify-center'}>
            Pane Disabled
          </div>
        ) : (
          <Profiler id={name} onRender={onRender}>
            <Pane {...itemProps}/>
          </Profiler>
        )}
      </div>
    </Card>
  )
}