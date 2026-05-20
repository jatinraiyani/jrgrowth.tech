import { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// Static fallback metadata — actual page title/OG is set dynamically by the client
// This avoids SSR Supabase calls which crash on Cloudflare Pages Workers runtime
export const metadata: Metadata = {
    title: 'Insights | JR Growth',
    description: 'Local SEO strategies, Google Maps optimization, and AI-powered growth insights from JR Growth.',
    openGraph: {
        siteName: 'JR Growth',
        type: 'article',
    },
};

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    return <BlogPostClient slug={resolvedParams.slug} />;
}
