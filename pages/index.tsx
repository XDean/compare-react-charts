import {Icon, Tab, Tabs} from "@blueprintjs/core";
import README from '../components/compare.mdx'
import Conclusion from '../components/conclusion.mdx'
import {DemoTab} from "../components/DemoTab";

const IndexPage = () => {
  return (
    <div className={'flex flex-col h-screen'}>
      <div className={'w-full shadow-md p-2 border-b bg-white z-10 flex flex-row items-center'}>
        <div className={'inline text-4xl'}>
          Compare React Chart Libraries
        </div>
      </div>
      <div className={'relative flex-grow w-full p-2'}>
        <Tabs className={'w-full h-full'} vertical large defaultSelectedTabId={'status'}>
          <Tab
            id={'status'}
            title={<div><Icon icon={'info-sign'}/> Status</div>}
            panelClassName={'border-l ml-1 flex-grow'}
            panel={<article className="markdown-body"><README/></article>}
          />
          <Tab
            id={'demo'}
            title={<div><Icon icon={'list-detail-view'}/> Demo</div>}
            panelClassName={'border-l pl-0 flex-grow'}
            panel={<DemoTab/>}
          />
          <Tab
            id={'compare'}
            title={<div><Icon icon={'manual'}/> Compare</div>}
            panelClassName={'border-l ml-1 flex-grow'}
            panel={<article className="markdown-body"><Conclusion/></article>}
          />
        </Tabs>
      </div>
    </div>
  );
}

export default IndexPage
