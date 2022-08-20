
import 'bootstrap/dist/css/bootstrap.min.css';

import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp(page: AppProps) { 
  return (<div className='container-fluid'>
    <div>
      <Head>
        <title>TOMRIS WEB PAGE - {page.router.pathname}</title>
      </Head> 
    </div>
    <page.Component {...page.pageProps} />
  </div>)
}
export default MyApp
