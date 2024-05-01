import './scss/page.scss'
import "./scss/person_init.scss";
import "./scss/post.scss";
import "./scss/panel.scss";
import './css/prism-theme.css'
import './scss/darkmode.scss'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
})

import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
}
