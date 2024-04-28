import { MetadataRoute } from 'next'
import external from './sources/external'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: external.domain + '/sitemap.xml',
  }
}