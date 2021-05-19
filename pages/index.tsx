import {Icon, Tab, Tabs} from "@blueprintjs/core";
// @ts-ignore
import README from '../README.md'

const IndexPage = () => {
  return (
    <div className={'flex flex-col h-screen'}>
      <div className={'w-full shadow-md p-2 border-b bg-white z-10 flex flex-row items-center'}>
        <div className={'inline text-4xl'}>
          Compare React Chart Libraries
        </div>
      </div>
      <div className={'relative flex-grow w-full p-2'}>
        <Tabs className={'w-full h-full'} vertical large defaultSelectedTabId={'readme'}>
          <Tab
            id={'readme'}
            title={<div><Icon icon={'manual'}/> README</div>}
            panelClassName={'border-l ml-1 flex-grow'}
            panel={<article className="markdown-body"><README/></article>}
          />
          <Tab
            id={'demo'}
            title={<div><Icon icon={'list-detail-view'}/> DEMO</div>}
            panelClassName={'border-l ml-1 flex-grow'}
            panel={<div>demo</div>}
          />
        </Tabs>
      </div>
    </div>
  );
}

export default IndexPage
