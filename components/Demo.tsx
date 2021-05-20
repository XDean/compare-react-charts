import {Tab, Tabs} from "@blueprintjs/core";
import {BarDemo} from "./bar/main";

export const Demo = () => {
  return (
    <Tabs className={'w-full h-full pl-1'} vertical large defaultSelectedTabId={'Bar'}>
      <Tab
        id={'Bar'}
        title={'Bar'}
        panelClassName={'border-l ml-1 flex-grow overflow-auto'}
        className={'w-16 text-center'}
        panel={<BarDemo/>}
      />
    </Tabs>
  )
}