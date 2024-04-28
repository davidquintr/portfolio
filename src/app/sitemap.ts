import { MetadataRoute } from 'next'
import { getPostMetadata } from './utils/postMetaData'
import external from './sources/external'
 
export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getPostMetadata();
    const parsedPages : Props[] = []

    interface Props {
        url : string
        lastModified : Date
        changeFrequency: "never" | "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly"
        priority:  number
    }


    posts.forEach((post) => {
        parsedPages.push({
            url: external.domain + 'post/' + post.slug,
            lastModified: new Date(),
            changeFrequency: 'never',
            priority: 0.5
        })
    })

    external.languages.forEach((lang) => {
        external.pages.forEach((page) => {
            parsedPages.push({
                url: external.domain + lang + page,
                lastModified: new Date(),
                changeFrequency: 'yearly',
                priority: 1
            })
        })
    })

    console.log(parsedPages)

    return parsedPages
}