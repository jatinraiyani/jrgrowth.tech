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
    "description": "JR Growth is an AI-Powered Local SEO & Google Business Growth Partner for Indian local businesses, specializing in Google Business Profile optimization and Performance Google Ads.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "3"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Manish Patel"
        },
        "reviewBody": "JR Growth's developer-level SEO is on another level. Most agencies just gave us checklists, but Jatin optimized our site speed, structured schema, and Google Maps listing directly. Our local industrial inquiries have more than doubled.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Shreeji Precast"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Andrew Harris"
        },
        "reviewBody": "Their AI-driven Local SEO and Google Ads strategy helped us capture high-intent B2B leads. Our wholesale inquiry volume grew by 4.1x while lowering our overall acquisition costs. Jatin is a true local growth partner.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Mega Retail Ltd."
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Dr. Anita Sharma"
        },
        "reviewBody": "Our beauty clinic saw a massive 4.6x growth in appointment bookings after optimizing our Google Business Profile and local Ads. We are now the top-rated clinic in our area, generating consistent daily walk-ins.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Anita Skin Clinic"
        }
      }
    ]
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
