import Image from 'next/image'
import PersonInit from './components/person_init'
import './scss/page.scss'

export default function Home() {
  return (
    <article className='article'>
      <PersonInit></PersonInit>
    </article>
  )
}
