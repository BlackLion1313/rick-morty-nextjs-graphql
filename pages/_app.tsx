import '../styles/globals.css'
import type { AppProps } from 'next/app'
//here anuthing we wanna apply globally

function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />

}

export default MyApp;
