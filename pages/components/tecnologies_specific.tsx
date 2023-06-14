import tech from '../assets/json/technologies.json'
import Image from 'next/image';

type TechnologiesSpecificProps = {
    lineTech : string
};

const TechnologiesSpecific: React.FC<TechnologiesSpecificProps> =  ({lineTech}) => {

    return(
        <>
        {
            tech?.map((element,index) => {
                return lineTech.includes(element.dim) ? (<Image className='project-info-tech-img' key={index} src={element.url} width={32} height={32} alt={element.alt}></Image>) : null
            })
        }
        </>
    )
}

export default TechnologiesSpecific