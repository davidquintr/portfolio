
const DateParsed = ({dateOrigin}) => {
    const dateTarget = new Date(dateOrigin)
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];
    const month = months[dateTarget.getMonth()]
    const formatedDate = `${month} ${dateTarget.getDate() + 1}, ${dateTarget.getFullYear()}`
    return(
        <>
        {
            formatedDate
        }
        </>
    )
    

}

export default DateParsed