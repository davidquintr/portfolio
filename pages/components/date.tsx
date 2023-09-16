import { useConfigContext } from "./config_provider";

const DateParsed = ({dateOrigin}) => {
      // @ts-ignore
  const { language, setLanguage, darkMode, setDarkMode } = useConfigContext();
    const dateTarget = new Date(dateOrigin)
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];
    const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
        'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    const month = months[dateTarget.getMonth()]
    const formatedDate = `${month} ${dateTarget.getDate() + 1}, ${dateTarget.getFullYear()}`
    return(
        <>
        {
            language == "es" ? `${dateTarget.getDate() + 1} de ${meses[dateTarget.getMonth()]} de ${dateTarget.getFullYear()}` : `${months[dateTarget.getMonth()]} ${dateTarget.getDate() + 1}, ${dateTarget.getFullYear()}`
        }
        </>
    )
    

}

export default DateParsed