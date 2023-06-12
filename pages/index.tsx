import PersonInit from './components/person_init'
import AboutMe from './components/about_me'
import PersonalInfo from './components/personal_info'
import { NavBar } from './nav_bar'

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
