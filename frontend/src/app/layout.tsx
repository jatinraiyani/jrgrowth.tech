import type { Metadata } from "next";
import Script from "next/script";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Powered Local SEO & Google Business Profile Expert | JR Growth",
  description: "JR Growth helps local businesses grow with AI Powered Local SEO, Google Business Profile Optimization, and Performance Google Ads services designed to improve Google Maps visibility, leads, and customer acquisition.",
  keywords: ["AI Powered Local SEO", "Google Business Profile Optimization", "Google Maps Ranking Expert", "Local SEO Agency", "Google Ads Services", "Local Business Marketing", "GBP Expert India", "AI SEO Services"],
  openGraph: {
    title: "AI Powered Local SEO & Google Maps Growth Systems | JR Growth",
    description: "JR Growth builds AI-powered Local SEO, Google Maps optimization, and Google Ads growth systems for businesses looking to improve local visibility and generate qualified leads worldwide.",
    url: "https://jrgrowth.tech/",
    siteName: "JR Growth",
    images: [
      {
        url: "https://jrgrowth.tech/og/home-og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JR Growth | AI Powered Local SEO & Google Maps Expert",
    description: "Grow your business with AI-driven Local SEO, GBP Optimization, and Performance Google Ads systems engineered for measurable visibility and lead generation.",
    images: ["https://jrgrowth.tech/og/home-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700;800&family=Manrope:wght@400;500;600&family=Geist:wght@400;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        
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
