import Image from 'next/image'
import PersonInit from './components/person_init'
import './scss/page.scss'
import AboutMe from './components/about_me'

export default function Home() {
  return (
    <article className='article article-base'>
      <PersonInit></PersonInit>
      <AboutMe></AboutMe>
    </article>
  )
}
