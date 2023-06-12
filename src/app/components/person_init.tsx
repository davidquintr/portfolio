import basics from '../assets/json/basics.json'
import Image from 'next/image'
import davidquint from '../assets/img/davidquint-photo.png'
import '../scss/person_init.scss'

export default function person_init(){

    const formatText = basics.eng.details.split('<br>').map((line, index) => (
        <p key={index}>{line}</p>
      ));

    return(
        <section className='section section-person'>
            <Image className='section-person-img' width={400} height={400} src={davidquint.src} alt="img_ico"></Image>
            <div className='section-person-details'>
                <h2>{basics.author}</h2>
                <p dangerouslySetInnerHTML={{__html:basics.eng.details}}/>
            </div>
        </section>
    )
}