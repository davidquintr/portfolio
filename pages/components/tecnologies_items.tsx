import tech from '../assets/json/technologies.json'
import Image from 'next/image'
import davidquint from '../assets/img/davidquint-photo.png'

export default function TechnologiesItems() {
  return (
      <>
          {
              tech?.map((element, index) => element.show == "true" && (
                 <Image className='tech-items' title={element.alt} src={element.url} width={32} height={32} key={index} alt={element.dim} />
              ))
          }
      </>
  )
}