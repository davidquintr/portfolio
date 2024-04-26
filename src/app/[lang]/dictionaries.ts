import en from './dictionaries/en.json'
import es from './dictionaries/es.json'

export const getDictionary = (locale : any) => {
    return locale == "es" ? es : en;
}