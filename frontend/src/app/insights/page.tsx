
import InsightsClient from './InsightsClient';

import { Metadata } from 'next';

// Static metadata only — no SSR Supabase calls to avoid Cloudflare Pages runtime crash
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

// Client component handles all Supabase fetching via useEffect
export default function InsightsPage() {
    return <InsightsClient initialBlogs={[]} />;
}
