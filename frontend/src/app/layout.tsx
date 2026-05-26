import type { Metadata } from "next";
import Script from "next/script";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI-Powered Local SEO & Google Business Growth Partner for Indian Local Businesses | JR Growth",
  description: "JR Growth is your AI-Powered Local SEO & Google Business Growth Partner. We help Indian businesses rank higher in local search, appear in Google Maps, and generate more phone calls and leads.",
  keywords: ["AI-Powered Local SEO", "Google Business Profile Optimization", "Google Maps Ranking Expert", "Local Growth Partner", "Google Ads Management", "Local Business Marketing India", "GBP Expert Gujarat", "AI SEO Services India"],
  alternates: {
    canonical: "https://jrgrowth.tech/",
  },
  openGraph: {
    title: "AI-Powered Local SEO & Google Maps Growth Partner | JR Growth",
    description: "JR Growth helps Indian local businesses scale Map Pack rankings, optimize Google Business Profiles, and manage performance Google Ads to drive real customer growth.",
    url: "https://jrgrowth.tech/",
    siteName: "JR Growth",
    images: [
      {
        url: "https://jrgrowth.tech/og/home-og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JR Growth | AI-Powered Local SEO & Google Maps Growth Partner",
    description: "Grow your local business with AI-driven Local SEO, Google Business Profile optimization, and Performance Google Ads systems engineered for actual phone calls and leads.",
    images: ["https://jrgrowth.tech/og/home-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "JR Growth",
    "image": "https://jrgrowth.tech/assets/logo.png",
    "@id": "https://jrgrowth.tech/#organization",
    "url": "https://jrgrowth.tech/",
    "telephone": "+917229089082",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Valsad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/JatinGMBExpert",
      "https://www.instagram.com/jatinraiyani.gbp",
      "https://www.linkedin.com/in/jatin-raiyani/"
    ],
    "description": "JR Growth is an AI-Powered Local SEO & Google Business Growth Partner for Indian local businesses, specializing in Google Business Profile optimization and Performance Google Ads."
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700;800&family=Manrope:wght@400;500;600&family=Geist:wght@400;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className="bg-background-light text-on-surface font-body selection:bg-primary-container selection:text-white m-0 p-0">
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
