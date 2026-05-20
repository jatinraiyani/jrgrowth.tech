import { MetadataRoute } from 'next';

// Static sitemap only — dynamic blog routes are omitted to avoid SSR Supabase
// calls that crash on Cloudflare Pages Workers runtime.
// Blog routes will still be crawled by search engines via the Insights page links.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jrgrowth.tech',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://jrgrowth.tech/insights',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://jrgrowth.tech/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://jrgrowth.tech/terms-and-conditions',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
