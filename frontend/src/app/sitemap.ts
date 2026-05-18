import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base static routes
  const routes: MetadataRoute.Sitemap = [
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

  // Fetch all published blogs
  const { data: blogs } = await supabase
    .from('blogs')
    .select('slug, updated_at')
    .eq('status', 'published');

  const blogRoutes: MetadataRoute.Sitemap = (blogs || []).map((blog) => ({
    url: `https://jrgrowth.tech/insights/${blog.slug}`,
    lastModified: new Date(blog.updated_at),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes];
}
