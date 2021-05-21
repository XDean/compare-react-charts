import {Tab, Tabs} from "@blueprintjs/core";
import {BarDemo} from "./bar/main";

const demos = [
  {name: 'Bar', Pane: BarDemo}
]

export const DemoTab = () => {
  return (
    <Tabs className={'w-full h-full pl-1'} vertical large>
      {demos.map(d => (
        <Tab
          id={d.name}
          title={d.name}
          key={d.name}
          panelClassName={'border-l ml-1 flex-grow overflow-auto'}
          className={'w-16 text-center'}
          panel={<d.Pane/>}
        />
      ))}
    </Tabs>
  )
}