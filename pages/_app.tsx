
import 'bootstrap/dist/css/bootstrap.min.css';


import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className='container-fluid'><Component {...pageProps} /></div>
}
export default MyApp
