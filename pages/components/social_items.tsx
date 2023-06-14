import socials from '../assets/json/socials.json';
import Image from 'next/image';

const SocialItems = () => {
    return(
        <>
        {
        socials?.map((element, index)=>{
            return <a key={index} className='button-link social' target='__blank' href={element.url}>
                <Image src={element.img} alt={element.name} width={128} height={128}></Image>
            </a>
        })
        }            
        </>
    )
}

export default SocialItems