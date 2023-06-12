
export default function PersonalItem({title, detail, url}){
    return(
        <>  
            <div className="personal-item">
                <h4>{title}</h4>
                {url == "" ? <p>{detail}</p> : <a className="button-link extended"><p>{detail}</p></a>}
            </div>  
        </>
    )
}