
import { supabase } from '@/lib/supabase';
import InsightsClient from './InsightsClient';

import { Metadata } from 'next';

export const revalidate = 60; // Revalidate every 60 seconds

export const metadata: Metadata = {
  title: "Local SEO Insights, Google Maps Strategies & AI SEO Blogs | JR Growth",
  description: "Explore expert insights, Local SEO strategies, Google Business Profile optimization guides, AI SEO trends, and Google Ads growth techniques from JR Growth.",
  keywords: ["Local SEO Insights", "Google Business Profile Tips", "Google Maps Ranking Strategies", "AI SEO Blogs", "Local Business Marketing Insights", "Google Ads Optimization Tips", "Local SEO Expert Blog"],
  openGraph: {
    title: "Local SEO & Google Maps Insights | JR Growth",
    description: "Discover actionable Local SEO strategies, Google Maps optimization systems, AI-powered SEO insights, and digital growth techniques from JR Growth.",
    url: "https://jrgrowth.tech/insights",
    siteName: "JR Growth",
    images: [
      {
        url: "https://jrgrowth.tech/og/insights-og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "https://jrgrowth.tech/insights"
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Insights & AI Growth Strategies | JR Growth",
    description: "Explore advanced Local SEO, GBP optimization, AI SEO systems, and Google Ads growth strategies for modern businesses.",
    images: ["https://jrgrowth.tech/og/insights-og.jpg"],
  },
};

export default async function InsightsPage() {
    const { data: blogs, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching blogs:', error);
    }

    return <InsightsClient initialBlogs={blogs || []} />;
}
