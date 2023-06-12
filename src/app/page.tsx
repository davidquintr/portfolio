import Image from 'next/image'
import './scss/page.scss'
import PersonInit from './components/person_init'
import AboutMe from './components/about_me'
import PersonalInfo from './components/personal_info'
import { NavBar } from './nav_bar'
import Contact from './pages/contact'


export default function Home() {
  return (
    <article className='article article-base'>
      <PersonInit></PersonInit>
      <NavBar></NavBar>
      <AboutMe></AboutMe>
      <PersonalInfo></PersonalInfo>
    </article>
  )
}
