import Image from 'next/image'
import PersonInit from './components/person_init'
import AboutMe from './components/about_me'
import PersonalInfo from './components/personal_info'
import { NavBar } from './nav_bar'
import Head from "next/head"

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <article className='article article-base'>
        <PersonInit></PersonInit>
        <NavBar></NavBar>
        <AboutMe></AboutMe>
        <PersonalInfo></PersonalInfo>
      </article>
    </>
  )
}
