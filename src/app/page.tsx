import Image from 'next/image'
import PersonInit from './components/person_init'
import './scss/page.scss'
import AboutMe from './components/about_me'
import PersonalInfo from './components/personal_info'

export default function Home() {
  return (
    <article className='article article-base'>
      <PersonInit></PersonInit>
      <AboutMe></AboutMe>
      <PersonalInfo></PersonalInfo>
    </article>
  )
}
