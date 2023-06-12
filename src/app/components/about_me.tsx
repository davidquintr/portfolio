
import basics from '../assets/json/basics.json'

export default function AboutMe(){
    return(
        <>
            <section className="section section-aboutme">
                <div className="section-title">
                    <h2>About me</h2>
                </div>
                <div className='section-body'>
                    <p dangerouslySetInnerHTML={{__html: basics.eng.aboutme}}></p>
                </div>
            </section>
        </>
    )
}