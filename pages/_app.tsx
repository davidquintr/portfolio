import './scss/page.scss'
import "./scss/person_init.scss";
import "./scss/post.scss";
import "./scss/panel.scss";
import './css/prism-theme.css'
import ConfigProvider from './components/config_provider'

import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}
