import {AppProps} from "next/dist/pages/_app";
import '../assets/styles/global.css'
import {FocusStyleManager} from "@blueprintjs/core";
import Head from 'next/head'

FocusStyleManager.onlyShowFocusOnTabs()

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Compare React Chart Libraries</title>
      </Head>
      <Component {...pageProps}/>
    </>
  )
}

export default MyApp
