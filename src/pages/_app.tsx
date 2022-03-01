import { AppProps } from 'next/app';
import '_shared/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
