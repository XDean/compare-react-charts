import {Tab, Tabs} from "@blueprintjs/core";
import {BarDemo} from "./demos/bar/main";
import {ScatterDemo} from "./demos/scatter/main";

const demos = [
  {name: 'Bar', Pane: BarDemo},
  {name: 'Scatter', Pane: ScatterDemo},
]

export const DemoTab = () => {
  return (
    <Tabs className={'w-full h-full pl-1'} vertical large renderActiveTabPanelOnly>
      {demos.map(d => (
        <Tab
          id={d.name}
          title={d.name}
          key={d.name}
          panelClassName={'border-l ml-1 flex-grow overflow-auto'}
          className={'text-center'}
          panel={<d.Pane/>}
        />
      ))}
    </Tabs>
  )
}