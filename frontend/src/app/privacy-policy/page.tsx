import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Privacy Policy | JR Growth",
  description: "Read the JR Growth Privacy Policy to understand how we collect, use, store, and protect user information while providing AI Powered Local SEO, Google Business Profile Optimization, and Google Ads services.",
  keywords: ["JR Growth Privacy Policy", "Local SEO Agency Privacy Policy", "Digital Marketing Privacy Policy", "Google Ads Privacy Terms", "User Data Protection Policy"],
  openGraph: {
    title: "Privacy Policy | JR Growth",
    description: "Learn how JR Growth protects user information, maintains secure communication, and manages data transparency across its digital marketing services and website operations.",
    url: "https://jrgrowth.tech/privacy-policy",
    siteName: "JR Growth",
    images: [
      {
        url: "https://jrgrowth.tech/og/privacy-policy-og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "https://jrgrowth.tech/privacy-policy"
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | JR Growth",
    description: "Understand how JR Growth collects, stores, and protects user information across our Local SEO, Google Business Profile, and Google Ads services.",
    images: ["https://jrgrowth.tech/og/privacy-policy-og.jpg"],
  },
};

export default function PrivacyPolicy() {
  const lastUpdated = "May 18, 2026";

  const overviewItems = [
    { icon: 'shield_lock', title: 'Data Protection', desc: 'Enterprise-grade security measures.' },
    { icon: 'verified_user', title: 'Privacy Commitment', desc: 'Your data is never sold to third parties.' },
    { icon: 'gpp_maybe', title: 'Transparent Terms', desc: 'Clear communication of all practices.' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-outline-variant/30 bg-white/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
              <div className="flex items-center gap-2">
                  <Link href="/"><img alt="JR GROWTH" className="w-auto object-contain h-14" src="/assets/logo.png" /></Link>
              </div>
              <nav className="hidden lg:flex items-center gap-8">
                  <a className="text-sm font-semibold text-text-body hover:text-primary transition-colors" href="/">Home</a>
                  <a className="text-sm font-semibold text-text-body hover:text-primary transition-colors" href="/#services">Services</a>
                  <a className="text-sm font-semibold text-text-body hover:text-primary transition-colors" href="/#industries">Industries</a>
                  <a className="text-sm font-semibold text-text-body hover:text-primary transition-colors" href="/#results">Results</a>
                  <a className="text-sm font-semibold text-text-body hover:text-primary transition-colors" href="/#process">Process</a>
                  <a className="text-sm font-semibold text-text-body hover:text-primary transition-colors" href="/#work">Work</a>
                  <a className="text-sm font-semibold text-text-body hover:text-primary transition-colors" href="/insights">Insights</a>
                  <a className="text-sm font-semibold text-text-body hover:text-primary transition-colors" href="/#about">About</a>
              </nav>
              <div className="flex items-center gap-3">
                  <a className="hidden sm:flex h-10 items-center justify-center rounded-xl border border-outline-variant bg-white px-5 text-sm font-bold text-text-heading transition-all hover:bg-surface-container"
                      href="mailto:jatin@jrgrowth.tech">
                      Email Strategy
                  </a>
                  <a className="flex h-10 items-center justify-center rounded-xl bg-primary px-5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-container"
                      href="https://wa.me/917229089082">
                      WhatsApp Consultation
                  </a>
              </div>
          </div>
      </header>

      <main className="min-h-screen bg-background-light pt-32 pb-24 selection:bg-primary-container selection:text-white">
        {/* Hero Section */}
        <section className="px-6 mx-auto max-w-7xl mb-16 md:mb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="material-symbols-outlined text-[14px] text-primary">policy</span>
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Legal Information</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-text-heading tracking-tight mb-8 poly-sans-feel">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-text-body/80 leading-relaxed mb-8 max-w-3xl">
              JR Growth is committed to maintaining transparency, protecting user information, and delivering professional digital marketing services through secure and ethical operational practices.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-text-body/60">
              <span className="material-symbols-outlined text-[18px]">update</span>
              Last Updated: {lastUpdated}
            </div>
          </div>
        </section>

        {/* Quick Overview Section */}
        <section className="px-6 mx-auto max-w-7xl mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {overviewItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                <div className="h-12 w-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-text-heading mb-2 poly-sans-feel">{item.title}</h3>
                <p className="text-sm text-text-body/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Main Content & Sidebar */}
        <section className="px-6 mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Sticky Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0 sticky top-32">
              <div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm">
                <h4 className="text-xs font-black uppercase tracking-widest text-text-body/50 mb-6">Contents</h4>
                <nav className="flex flex-col gap-3">
                  <a href="#introduction" className="text-sm font-semibold text-text-body/70 hover:text-primary transition-colors">1. Introduction</a>
                  <a href="#business-info" className="text-sm font-semibold text-text-body/70 hover:text-primary transition-colors">2. Business Information</a>
                  <a href="#information-collected" className="text-sm font-semibold text-text-body/70 hover:text-primary transition-colors">3. Information We Collect</a>
                  <a href="#how-we-use" className="text-sm font-semibold text-text-body/70 hover:text-primary transition-colors">4. How Information is Used</a>
                  <a href="#cookies" className="text-sm font-semibold text-text-body/70 hover:text-primary transition-colors">5. Cookies & Tracking</a>
                  <a href="#third-party" className="text-sm font-semibold text-text-body/70 hover:text-primary transition-colors">6. Third Party Services</a>
                  <a href="#data-security" className="text-sm font-semibold text-text-body/70 hover:text-primary transition-colors">7. Data Security & Rights</a>
                </nav>
              </div>
            </aside>

            {/* Legal Content */}
            <div className="flex-1 max-w-3xl prose prose-slate prose-headings:text-text-heading prose-headings:font-bold prose-headings:poly-sans-feel prose-p:text-text-body/80 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
              
              <div id="introduction" className="mb-12 scroll-mt-32">
                <h2 className="text-2xl font-extrabold mb-4 border-b border-slate-200 pb-4">1. Introduction</h2>
                <p>JR Growth values transparency, data security, and responsible digital operations. This Privacy Policy explains how information is collected, used, stored, and protected when users interact with the JR Growth website, communication systems, and digital marketing services.</p>
                <p>JR Growth provides AI Powered Local SEO, Google Business Profile Optimization, and Google Ads services for businesses worldwide while implementing reasonable security measures to protect business communications and operational data.</p>
              </div>

              <div id="business-info" className="mb-12 scroll-mt-32 bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm">
                <h2 className="text-xl font-extrabold mb-6">2. Business Information</h2>
                <ul className="space-y-4 not-prose">
                  <li className="flex items-start gap-3"><span className="font-bold text-text-heading w-32">Business Name:</span><span className="text-text-body/80">JR Growth</span></li>
                  <li className="flex items-start gap-3"><span className="font-bold text-text-heading w-32">Category:</span><span className="text-text-body/80">AI Powered Local SEO, Google Business Profile Optimization & Google Ads Services</span></li>
                  <li className="flex items-start gap-3"><span className="font-bold text-text-heading w-32">Location:</span><span className="text-text-body/80">Valsad, Gujarat, India</span></li>
                  <li className="flex items-start gap-3"><span className="font-bold text-text-heading w-32">Email:</span><a href="mailto:jatin@jrgrowth.tech" className="text-primary font-medium">jatin@jrgrowth.tech</a></li>
                  <li className="flex items-start gap-3"><span className="font-bold text-text-heading w-32">WhatsApp:</span><a href="https://wa.me/917229089082" className="text-primary font-medium">+91 72290 89082</a></li>
                </ul>
              </div>

              <div id="information-collected" className="mb-12 scroll-mt-32">
                <h2 className="text-2xl font-extrabold mb-4 border-b border-slate-200 pb-4">How JR Growth Collects &amp; Uses Information</h2>
                <p>JR Growth may collect various types of information to provide and improve our services, including:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 list-none pl-0 not-prose">
                  <li className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm"><span className="material-symbols-outlined text-primary">person</span> <span className="font-semibold text-text-heading">Personal Information (Name)</span></li>
                  <li className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm"><span className="material-symbols-outlined text-primary">mail</span> <span className="font-semibold text-text-heading">Email Address</span></li>
                  <li className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm"><span className="material-symbols-outlined text-primary">call</span> <span className="font-semibold text-text-heading">Phone Number</span></li>
                  <li className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm"><span className="material-symbols-outlined text-primary">storefront</span> <span className="font-semibold text-text-heading">Business Details</span></li>
                  <li className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm"><span className="material-symbols-outlined text-primary">language</span> <span className="font-semibold text-text-heading">Website Information</span></li>
                  <li className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm"><span className="material-symbols-outlined text-primary">devices</span> <span className="font-semibold text-text-heading">Browser/Device Information</span></li>
                </ul>
              </div>

              <div id="how-we-use" className="mb-12 scroll-mt-32">
                <h2 className="text-2xl font-extrabold mb-4 border-b border-slate-200 pb-4">User Rights &amp; Communication Preferences</h2>
                <p>We use the collected information for specific, clearly defined operational purposes:</p>
                <ul>
                  <li><strong>Service Delivery:</strong> To provide contracted digital marketing and SEO services.</li>
                  <li><strong>Consultation:</strong> To communicate effectively during audits and inquiries.</li>
                  <li><strong>Campaign Optimization:</strong> To refine and improve advertising performance.</li>
                  <li><strong>Website Improvement:</strong> To analyze user behavior and enhance website usability.</li>
                  <li><strong>Security Monitoring:</strong> To protect our digital infrastructure against misuse.</li>
                </ul>
              </div>

              <div id="cookies" className="mb-12 scroll-mt-32">
                <h2 className="text-2xl font-extrabold mb-4 border-b border-slate-200 pb-4">5. Cookies & Tracking</h2>
                <p>JR Growth uses cookies and similar tracking technologies to monitor analytics, track performance, and analyze visitor behavior to optimize advertising campaigns.</p>
                <p>Google Analytics and related tools may be used for improving website performance and user experience. Users can control cookie preferences through their browser settings.</p>
              </div>

              <div id="third-party" className="mb-12 scroll-mt-32">
                <h2 className="text-2xl font-extrabold mb-4 border-b border-slate-200 pb-4">Third-Party Services &amp; Analytics Platforms</h2>
                <p>JR Growth may use trusted third-party services to facilitate our operations. These include:</p>
                <div className="flex flex-wrap gap-2 mt-4 not-prose">
                  <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-sm font-semibold text-text-heading">Google Analytics</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-sm font-semibold text-text-heading">Google Ads</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-sm font-semibold text-text-heading">Meta Platforms</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-sm font-semibold text-text-heading">Cloudflare</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-sm font-semibold text-text-heading">Supabase</span>
                </div>
              </div>

              <div id="data-security" className="mb-12 scroll-mt-32">
                <h2 className="text-2xl font-extrabold mb-4 border-b border-slate-200 pb-4">Data Protection &amp; Security Practices</h2>
                
                <h3 className="text-lg font-bold mt-6 mb-2 text-text-heading">Data Security</h3>
                <p>JR Growth implements reasonable technical and organizational security measures to protect user data against unauthorized access, misuse, disclosure, or data loss.</p>
                
                <h3 className="text-lg font-bold mt-8 mb-2 text-text-heading">User Rights</h3>
                <p>Users may request access to their personal data, correction of inaccurate information, deletion of records, or opt-outs from specific communications.</p>

                <h3 className="text-lg font-bold mt-8 mb-2 text-text-heading">Data Retention & International Users</h3>
                <p>Information is retained only for operational, legal, analytical, and business purposes where reasonably necessary. As JR Growth provides services globally, user information may be processed across international digital infrastructure providers.</p>

                <h3 className="text-lg font-bold mt-8 mb-2 text-text-heading">Policy Updates</h3>
                <p>JR Growth may update this Privacy Policy periodically. Updated versions will be reflected on this page with revised effective dates.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="px-6 mx-auto max-w-4xl mt-24">
          <div className="bg-text-heading rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c7fbe8]/10 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10">
              <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/10 text-white mb-8 border border-white/10">
                <span className="material-symbols-outlined text-3xl">contact_support</span>
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 poly-sans-feel">Need Clarification Regarding Privacy?</h2>
              <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
                For privacy-related questions or support inquiries, contact JR Growth directly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:jatin@jrgrowth.tech" className="h-14 px-8 inline-flex items-center justify-center rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors gap-2 w-full sm:w-auto">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                  Email Support
                </a>
                <a href="https://wa.me/917229089082" target="_blank" rel="noopener noreferrer" className="h-14 px-8 inline-flex items-center justify-center rounded-xl bg-white/10 text-white border border-white/20 font-bold hover:bg-white/20 transition-colors gap-2 w-full sm:w-auto">
                  <span className="material-symbols-outlined text-[20px]">forum</span>
                  WhatsApp Discussion
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-20 border-t border-outline-variant/30">
          <div className="mx-auto max-w-7xl px-6">
              <div className="grid gap-12 lg:grid-cols-4">
                  <div className="col-span-1 lg:col-span-1">
                      <div className="flex items-center gap-2 mb-6">
                          <img alt="JR GROWTH" className="w-auto object-contain h-12" src="/assets/logo.png" />
                      </div>
                      <p className="text-sm text-text-body/70 leading-relaxed">JR Growth maintains transparent privacy practices and secure operational systems while delivering AI Powered Local SEO, Google Business Profile Optimization, and Google Ads services for businesses worldwide.</p>
                      <div className="mt-8 flex flex-wrap gap-3">
                          <a className="h-9 w-9 rounded-full bg-text-heading flex items-center justify-center text-white hover:bg-[#1877F2] transition-colors p-2"
                              href="https://www.facebook.com/JatinGMBExpert" target="_blank" title="Facebook">
                              <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
                                  <path
                                      d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                              </svg>
                          </a>
                          <a className="h-9 w-9 rounded-full bg-text-heading flex items-center justify-center text-white hover:bg-[#E4405F] transition-colors p-2"
                              href="https://www.instagram.com/jatinraiyani.gbp" target="_blank" title="Instagram">
                              <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
                                  <path
                                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                              </svg>
                          </a>
                          <a className="h-9 w-9 rounded-full bg-text-heading flex items-center justify-center text-white hover:bg-[#0A66C2] transition-colors p-2"
                              href="https://www.linkedin.com/in/jatin-raiyani/" target="_blank" title="LinkedIn">
                              <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
                                  <path
                                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                              </svg>
                          </a>
                          <a className="h-9 w-9 rounded-full bg-text-heading flex items-center justify-center text-white hover:bg-[#4285F4] transition-colors p-2"
                              href="https://share.google/IIXEG9LP9qnLBaDLC" target="_blank" title="Google">
                              <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
                                  <path
                                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307c-1.973-1.893-4.573-3.28-8.213-3.28-6.12 0-11.267 4.88-11.267 11.2s5.147 11.2 11.267 11.2c3.307 0 5.813-1.093 7.84-3.2 2.08-2.08 2.733-4.987 2.733-7.347 0-.707-.053-1.387-.16-2.027h-10.427z" />
                              </svg>
                          </a>
                          <a className="h-9 w-9 rounded-full bg-text-heading flex items-center justify-center text-white hover:bg-[#25D366] transition-colors p-2"
                              href="https://wa.me/917229089082" target="_blank" title="WhatsApp">
                              <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
                                  <path
                                      d="M17.472 14.382c-.301-.149-1.767-.872-2.04-.971-.272-.099-.47-.149-.667.149-.198.298-.767.971-.94 1.16-.173.189-.347.212-.647.063-.301-.149-1.27-.468-2.42-1.493-.894-.798-1.497-1.783-1.672-2.082-.173-.299-.018-.461.132-.609.135-.133.301-.349.452-.524.15-.174.2-.299.3-.499.1-.199.05-.373-.025-.523-.075-.15-.667-1.61-.914-2.208-.241-.582-.486-.504-.667-.513-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.416.247-.695.247-1.291.173-1.415-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                              </svg>
                          </a>
                      </div>
                  </div>
                  <div>
                      <h4 className="text-sm font-bold text-text-heading mb-6 uppercase tracking-widest font-label">Systems
                      </h4>
                      <ul className="space-y-4 text-sm text-text-body/70 font-semibold">
                          <li className=""><a className="hover:text-primary transition-colors" href="/#services">AI Powered Local SEO</a></li>
                          <li className=""><a className="hover:text-primary transition-colors" href="/#services">GBP Optimization</a></li>
                          <li className=""><a className="hover:text-primary transition-colors" href="/#services">Performance Google Ads</a></li>
                      </ul>
                  </div>
                  <div>
                      <h4 className="text-sm font-bold text-text-heading mb-6 uppercase tracking-widest font-label">Markets
                      </h4>
                      <ul className="space-y-4 text-sm text-text-body/70">
                          <li className=""><a className="hover:text-primary transition-colors" href="#">Healthcare (Global)</a></li>
                          <li className=""><a className="hover:text-primary transition-colors" href="#">Home Services (NA/EMEA)</a></li>
                          <li className=""><a className="hover:text-primary transition-colors" href="#">Hospitality (Global)</a></li>
                          <li className=""><a className="hover:text-primary transition-colors" href="#">Real Estate (MENA/NA)</a></li>
                          <li className=""><a className="hover:text-primary transition-colors" href="#">Wellness (APAC/Global)</a></li>
                      </ul>
                  </div>
                  <div>
                      <h4 className="text-sm font-bold text-text-heading mb-6 uppercase tracking-widest font-label">Contact
                      </h4>
                      <ul className="space-y-4 text-sm text-text-body/70">
                          <li className=""><a className="hover:text-primary transition-colors font-semibold"
                                  href="mailto:jatin@jrgrowth.tech">jatin@jrgrowth.tech</a></li>
                          <li className=""><a className="hover:text-primary transition-colors font-semibold"
                                  href="https://wa.me/917229089082">+91 72290 89082</a></li>
                          <li className="pt-2 text-xs opacity-60">Building local growth since 2018.</li>
                      </ul>
                  </div>
              </div>
              <div
                  className="mt-20 border-t border-outline-variant/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-text-body/50">
                  <p className="">© 2024 JR Growth. All technical rights reserved.</p>
                  <div className="flex gap-8">
                      <a className="hover:text-primary transition-colors" href="/privacy-policy">Privacy Policy</a>
                      <a className="hover:text-primary transition-colors" href="/terms-and-conditions">Terms & Conditions</a>
                  </div>
              </div>
          </div>
      </footer>
    </>
  );
}
