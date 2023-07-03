import './scss/page.scss'
import "./scss/person_init.scss";
import "./scss/post.scss";
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
