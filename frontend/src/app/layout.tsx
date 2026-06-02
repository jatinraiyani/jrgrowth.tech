import type { Metadata } from "next";
import Script from "next/script";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI-Powered Local SEO & Google Business Growth Partner | JR Growth",
  description: "JR Growth is your AI-Powered Local SEO & Google Business Growth Partner. We help Indian & global local businesses rank on Google Maps, build authority, and generate calls.",
  keywords: [
    "AI-Powered Local SEO",
    "Google Business Profile Optimization",
    "Google Maps SEO Expert",
    "Performance Google Ads Systems",
    "AI Landing Page Development",
    "JR Growth",
    "Jatin Raiyani",
    "Local SEO Partner India",
    "GBP Optimization Surat",
    "Maps Ranking Expert Gujarat",
    "Google Map Pack ranking",
    "local pack visibility",
    "local citation building",
    "local schema markup"
  ],
  alternates: {
    canonical: "https://jrgrowth.tech/",
  },
  openGraph: {
    title: "AI-Powered Local SEO & Google Business Growth Partner | JR Growth",
    description: "JR Growth is your AI-Powered Local SEO & Google Business Growth Partner. We help Indian & global local businesses rank on Google Maps, build authority, and generate calls.",
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
    title: "AI-Powered Local SEO & Google Business Growth Partner | JR Growth",
    description: "JR Growth is your AI-Powered Local SEO & Google Business Growth Partner. We help Indian & global local businesses rank on Google Maps, build authority, and generate calls.",
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
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://jrgrowth.tech/#website",
        "url": "https://jrgrowth.tech/",
        "name": "JR Growth",
        "description": "AI-Powered Local SEO & Google Business Growth Partner",
        "publisher": {
          "@id": "https://jrgrowth.tech/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://jrgrowth.tech/insights?search={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://jrgrowth.tech/#webpage",
        "url": "https://jrgrowth.tech/",
        "name": "AI-Powered Local SEO & Google Business Growth Partner | JR Growth",
        "isPartOf": {
          "@id": "https://jrgrowth.tech/#website"
        },
        "about": {
          "@id": "https://jrgrowth.tech/#organization"
        },
        "description": "JR Growth is your AI-Powered Local SEO & Google Business Growth Partner. We help Indian & global local businesses rank on Google Maps, build authority, and generate calls.",
        "inLanguage": "en-US",
        "breadcrumb": {
          "@id": "https://jrgrowth.tech/#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://jrgrowth.tech/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://jrgrowth.tech/"
          }
        ]
      },
      {
        "@type": "Person",
        "@id": "https://jrgrowth.tech/#person",
        "name": "Jatin Raiyani",
        "jobTitle": "Computer Software Engineer & Technical Growth Strategist",
        "image": "https://jrgrowth.tech/assets/jatin.jpg",
        "description": "Jatin Raiyani is a Computer Software Engineer and the founder of JR Growth, specializing in technical Local SEO, Google Business Profile optimization, and performance Google Ads campaigns.",
        "sameAs": [
          "https://www.linkedin.com/in/jatin-raiyani/",
          "https://www.instagram.com/jatinraiyani.gbp"
        ],
        "knowsAbout": [
          "Local Search Engine Optimization",
          "Google Business Profile Optimization",
          "Google Ads Management",
          "Search Engine Marketing",
          "AI Landing Page Development",
          "Software Engineering",
          "Next.js"
        ],
        "worksFor": {
          "@id": "https://jrgrowth.tech/#organization"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://jrgrowth.tech/#organization",
        "name": "JR Growth",
        "url": "https://jrgrowth.tech/",
        "logo": "https://jrgrowth.tech/assets/logo.png",
        "image": "https://jrgrowth.tech/assets/logo.png",
        "telephone": "+917229089082",
        "priceRange": "$$",
        "founder": {
          "@id": "https://jrgrowth.tech/#person"
        },
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
        "areaServed": [
          {
            "@type": "Country",
            "name": "India"
          },
          {
            "@type": "Country",
            "name": "United States"
          },
          {
            "@type": "Country",
            "name": "United Kingdom"
          },
          {
            "@type": "Country",
            "name": "Canada"
          },
          {
            "@type": "Country",
            "name": "United Arab Emirates"
          },
          {
            "@type": "Country",
            "name": "Australia"
          },
          {
            "@type": "Country",
            "name": "Singapore"
          }
        ],
        "description": "JR Growth is an AI-Powered Local SEO & Google Business Growth Partner. We help local businesses rank on Google Maps, build authority, and generate calls through developer-level optimization.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "@id": "https://jrgrowth.tech/#offercatalog",
          "name": "Growth & Optimization Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "@id": "https://jrgrowth.tech/#service-gbp",
                "name": "Google Business Profile Optimization",
                "description": "Complete audit, categories tuning, citation building, review strategies, ranking maps heatmap analysis, and monthly profile management for maximum local visibility.",
                "provider": {
                  "@id": "https://jrgrowth.tech/#organization"
                },
                "serviceType": "GBP Optimization"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "@id": "https://jrgrowth.tech/#service-localseo",
                "name": "AI-Powered Local SEO Systems",
                "description": "Developer-level code adjustments, schema.org markup, local keyword landing pages, citation auditing, and search indexing checks.",
                "provider": {
                  "@id": "https://jrgrowth.tech/#organization"
                },
                "serviceType": "Local SEO"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "@id": "https://jrgrowth.tech/#service-googleads",
                "name": "Performance Google Ads Campaigns",
                "description": "ROI-focused local search ads, conversion funnel setup, negative keywords optimization, call tracking, and localized search query scaling.",
                "provider": {
                  "@id": "https://jrgrowth.tech/#organization"
                },
                "serviceType": "PPC Ads Management"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "@id": "https://jrgrowth.tech/#service-metaads",
                "name": "Local Meta Ads Systems",
                "description": "Localized Facebook and Instagram ads targeted to local postal areas with custom visual ad creative targeting high-intent local prospects.",
                "provider": {
                  "@id": "https://jrgrowth.tech/#organization"
                },
                "serviceType": "Social Media Advertising"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "@id": "https://jrgrowth.tech/#service-webdev",
                "name": "AI-Powered Landing Page Development",
                "description": "High-performance web landing pages built on Next.js, optimized for Google PageSpeed scores, core web vitals, and conversion architecture.",
                "provider": {
                  "@id": "https://jrgrowth.tech/#organization"
                },
                "serviceType": "Web Development"
              }
            }
          ]
        },
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
      },
      {
        "@type": "FAQPage",
        "@id": "https://jrgrowth.tech/#faq",
        "isPartOf": {
          "@id": "https://jrgrowth.tech/#webpage"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does Local SEO take to show results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Local SEO is a long-term growth strategy. Most businesses start seeing improvements in Google rankings and map visibility within 30–90 days, depending on competition, business location, and current website/GBP condition. For highly competitive industries like clinics, real estate, or salons, consistent monthly optimization is recommended for better long-term results."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between Local SEO and Google Business Profile Optimization?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Local SEO focuses on improving your overall online visibility through website optimization, local keywords, technical SEO, citations, and local landing pages. Google Business Profile (GBP) Optimization focuses specifically on improving your Google Maps ranking, business profile visibility, calls & direction requests, and reviews & customer engagement. Both work best together."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help my business rank higher on Google Maps?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our Google Business Profile optimization strategies are designed to improve your visibility in Google Maps and local search results by optimizing business categories, services, local relevance, reviews, geo-targeting signals, and engagement activity."
            }
          },
          {
            "@type": "Question",
            "name": "Do you guarantee #1 rankings on Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No ethical SEO expert can guarantee #1 rankings because Google’s algorithm constantly changes. We guarantee transparent work, proven optimization strategies, regular reporting, and consistent improvements focused on generating real business results."
            }
          },
          {
            "@type": "Question",
            "name": "Is Google Ads better than SEO for getting leads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google Ads gives faster results by appearing instantly in search results, while Local SEO builds long-term organic visibility and trust. The best strategy is using Google Ads for immediate leads and Local SEO/GBP optimization for long-term growth."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a website for Local SEO or Google Business Profile optimization?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A website is highly recommended for better rankings and credibility. Google Business Profile optimization can help businesses without a website, but businesses with optimized websites generally rank stronger and convert better."
            }
          },
          {
            "@type": "Question",
            "name": "Will I receive reports and updates on work progress?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Transparency is a core part of JR Growth. Depending on your package, you’ll receive ranking reports, Google Business insights, lead & traffic tracking, monthly performance updates, and strategy recommendations."
            }
          },
          {
            "@type": "Question",
            "name": "Which businesses benefit the most from your services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our services are ideal for local businesses that want more visibility, calls, and customers from Google. Commonly benefiting industries include clinics, salons, spas, restaurants, cafes, real estate, gyms, home services, retail, and education."
            }
          }
        ]
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
