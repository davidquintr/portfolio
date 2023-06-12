import PersonalItem from "./personal_item";
import personal from '../assets/json/personal.json'
import { differenceInYears } from 'date-fns';

export default function PersonalInfo(){
    
    let myAge = new Date("2004-04-19");
    const age = differenceInYears(new Date(), myAge)

    return(
        <>
            <section className="section section-personal">
                <div className="section-title">
                    <h2>Personal info</h2>
                </div>
                <div className="section-body personal">
                    <PersonalItem title={"Email"} url={""} detail={personal.mail}></PersonalItem>
                    <PersonalItem title={"Age"} url={""} detail={age}></PersonalItem>
                    <PersonalItem title={"Birthday"} url={""} detail={personal.birthday}></PersonalItem>
                    <PersonalItem title={"CV"} url={"curriculum.pdf"} detail={"Open"}></PersonalItem>
                </div>
                <div className="section-footer">
                    <a className="button-link">Contact me</a>
                </div>
            </section>
        </>
    )
}