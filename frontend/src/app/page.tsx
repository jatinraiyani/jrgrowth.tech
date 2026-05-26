
'use client';
import { useEffect } from 'react';
import HomeInsights from '@/components/HomeInsights';

export default function Home() {
  useEffect(() => {
    // Re-initialize any logic that was inside script tags
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));
    
    // Copy images to public dir
    // We will do this via a separate bash command
  }, []);

  // Placeholder functions for onclick events
  const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    const content = document.getElementById(modalId + '-content') || modal.querySelector('.translate-x-full, .scale-95, .opacity-0, .translate-y-full');
    
    modal.classList.remove('hidden');
    // Force reflow
    void modal.offsetWidth;
    
    if (content) {
        if (content.classList.contains('translate-x-full')) {
            content.classList.remove('translate-x-full');
            content.classList.add('translate-x-0');
        } else if (content.classList.contains('translate-y-full')) {
            content.classList.remove('translate-y-full');
            content.classList.add('translate-y-0');
        } else {
            content.classList.remove('scale-95', 'opacity-0');
            content.classList.add('scale-100', 'opacity-100');
        }
    }
  };

  const closeModal = (modalId: string) => {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    const content = document.getElementById(modalId + '-content') || modal.querySelector('.translate-x-0, .scale-100, .opacity-100, .translate-y-0');
    
    if (content) {
        if (content.classList.contains('translate-x-0')) {
            content.classList.remove('translate-x-0');
            content.classList.add('translate-x-full');
        } else if (content.classList.contains('translate-y-0')) {
            content.classList.remove('translate-y-0');
            content.classList.add('translate-y-full');
        } else {
            content.classList.remove('scale-100', 'opacity-100');
            content.classList.add('scale-95', 'opacity-0');
        }
    }
    
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 500); // Wait for transition
  };
  const openCaseStudy = (id: string) => {
    const modal = document.getElementById(id);
    if(modal) {
        modal.classList.remove('hidden');
        // Force reflow
        void modal.offsetWidth;
        modal.classList.add('active');
    }
  };

  const closeCaseStudy = (id: string) => {
    const modal = document.getElementById(id);
    if(modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.classList.add('hidden'), 500);
    }
  };

  return (
    <>
      

    
    

    {/* Header */}
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant/30 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2">
                <img alt="JR GROWTH" className="w-auto object-contain h-14" src="assets/logo.png" />
            </div>
            <nav className="hidden lg:flex items-center gap-8">
                <a className="text-sm font-semibold text-text-body hover:text-primary transition-colors" href="#">Home</a>
                <a className="text-sm font-semibold text-text-body hover:text-primary transition-colors" href="#services">Services</a>
                <a className="text-sm font-semibold text-text-body hover:text-primary transition-colors" href="#industries">Industries</a>
                <a className="text-sm font-semibold text-text-body hover:text-primary transition-colors" href="#results">Results</a>
                <a className="text-sm font-semibold text-text-body hover:text-primary transition-colors" href="#process">Process</a>
                <a className="text-sm font-semibold text-text-body hover:text-primary transition-colors" href="#work">Work</a>
                <a className="text-sm font-semibold text-text-body hover:text-primary transition-colors" href="/insights">Insights</a>
                <a className="text-sm font-semibold text-text-body hover:text-primary transition-colors" href="#about">About</a>
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
    {/* Hero Section */}
    <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48">
        <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
                <div className="max-w-2xl reveal reveal-left">
                    <div
                        className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary font-label">
                        <span className="relative flex h-2 w-2"><span
                                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span><span
                                className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span></span>
                        AI-Powered Local Growth
                    </div>
                    <h1
                        className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-text-heading poly-sans-feel lg:text-7xl">
                        AI Powered Local SEO &amp; Google Maps Growth Systems
                    </h1>
                    <div className="mb-10 text-lg leading-relaxed text-text-body/80 lg:text-xl space-y-4">
                        <p>
                            JR Growth is an AI-powered Local SEO and Google Business Profile optimization agency helping businesses improve Google Maps visibility, local search rankings, and customer acquisition through advanced SEO systems and performance-driven Google Ads strategies.
                        </p>
                        <p>
                            We specialize in building scalable local growth systems for: healthcare businesses, home service companies, restaurants, clinics, legal firms, construction businesses, real estate companies, beauty clinics, and multi-location local brands.
                        </p>
                        <p>
                            Our optimization systems combine: AI-powered search analysis, technical Local SEO, Google Maps optimization, entity-based SEO, conversion-focused Google Ads, and local authority building to help businesses generate measurable visibility and long-term growth across competitive markets.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <a className="group flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/30 magnetic-btn"
                            href="https://wa.me/917229089082">
                            Book Free Audit
                            <span
                                className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </a>
                        <div className="flex items-center gap-4 px-4 py-2 border-l-2 border-primary/20">
                            <div className="flex -space-x-3">
                                <img className="h-10 w-10 rounded-full border-2 border-white object-cover bg-white"
                                    src="assets/shreeji.png" alt="Shreeji Precast" />
                                <img className="h-10 w-10 rounded-full border-2 border-white object-cover bg-white"
                                    src="assets/grand.jpg" alt="Grand Horeca" />
                                <img className="h-10 w-10 rounded-full border-2 border-white object-cover bg-white"
                                    src="assets/mega.png" alt="Mega Retail" />
                            </div>
                            <div className="text-sm font-semibold text-text-body">
                                Trusted by <span className="text-primary font-bold">500+</span> Local Businesses
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative group reveal reveal-right">
                    {/* Floating Background Elements */}
                    <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-primary/10 blur-3xl animate-pulse">
                    </div>
                    <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-accent-green/10 blur-3xl animate-pulse"
                        style={{animationDelay: "1s"}}></div>

                    {/* Hero Image Container */}
                    <div
                        className="relative z-10 overflow-hidden rounded-[3rem] bg-white p-4 shadow-2xl ring-1 ring-black/5 hover:scale-[1.02] transition-transform duration-700">
                        <img src="assets/hero-3d-green.png" alt="AI-Powered Local SEO Systems"
                            className="w-full h-auto rounded-[2.5rem] object-cover" />

                        {/* Floating Badge */}
                        <div className="absolute bottom-10 right-10 rounded-2xl bg-white/90 backdrop-blur-md p-4 shadow-xl ring-1 ring-black/5 reveal reveal-up"
                            style={{transitionDelay: "0.5s"}}>
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    <div
                                        className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                                        <span className="material-symbols-outlined text-sm">auto_awesome</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-text-body/50 uppercase tracking-widest">
                                        Next-Gen AI</p>
                                    <p className="text-sm font-black text-text-heading">Neural Maps Engine</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Problem Section */}
    <section className="bg-inverse-surface py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="mb-12 text-3xl font-bold leading-tight poly-sans-feel lg:text-5xl">
                AI Powered Visibility Systems For Modern Local Businesses
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-lg text-white/70">
                Customers are already searching for services like yours every minute. If you aren't appearing in the top
                3 spots of Google Maps, you're effectively invisible to 70% of your market.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-left transition-all hover:bg-white/10 reveal reveal-up"
                    style={{transitionDelay: "0.1s"}}>
                    <span className="material-symbols-outlined text-4xl text-[#c7fbe8] mb-4">search_off</span>
                    <h3 className="mb-2 text-xl font-bold">Lost Rankings</h3>
                    <p className="text-sm text-white/60">Competitors with inferior services are taking your customers simply
                        because they are "closer" or "better optimized" on maps.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-left transition-all hover:bg-white/10 reveal reveal-up"
                    style={{transitionDelay: "0.2s"}}>
                    <span className="material-symbols-outlined text-4xl text-[#c7fbe8] mb-4">trending_down</span>
                    <h3 className="mb-2 text-xl font-bold">Inconsistent Leads</h3>
                    <p className="text-sm text-white/60">Relying on word-of-mouth creates revenue rollercoasters. You need a
                        technical system that generates leads predictably.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-left transition-all hover:bg-white/10 reveal reveal-up"
                    style={{transitionDelay: "0.3s"}}>
                    <span className="material-symbols-outlined text-4xl text-[#c7fbe8] mb-4">payments</span>
                    <h3 className="mb-2 text-xl font-bold">Wasted Ad Spend</h3>
                    <p className="text-sm text-white/60">Generic agencies burn your budget on clicks that don't convert. Our
                        systems focus on high-intent search capture.</p>
                </div>
            </div>
        </div>
    </section>
    <section className="bg-surface-container py-32" id="why-jr-growth">
        <div className="mx-auto max-w-7xl px-6">
            <div className="mb-20 text-center">
                <h2 className="mb-6 text-4xl font-extrabold text-text-heading poly-sans-feel lg:text-6xl max-w-4xl mx-auto">
                    Built Like A Technical Growth System. Not A Traditional Marketing Agency.
                </h2>
                <div className="h-1.5 w-24 bg-primary rounded-full mx-auto"></div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl bg-white p-8 border border-outline-variant/30 shadow-sm transition-all hover:shadow-md reveal reveal-up"
                    style={{transitionDelay: "0.1s"}}>
                    <span className="material-symbols-outlined text-primary text-3xl mb-4">psychology</span>
                    <h3 className="text-lg font-bold text-text-heading mb-2">AI Powered Local SEO</h3>
                    <p className="text-sm text-text-body/70">Using machine learning to analyze search patterns and automate
                        ranking gains.</p>
                </div>
                <div
                    className="rounded-2xl bg-white p-8 border border-outline-variant/30 shadow-sm transition-all hover:shadow-md">
                    <span className="material-symbols-outlined text-primary text-3xl mb-4">map</span>
                    <h3 className="text-lg font-bold text-text-heading mb-2">Google Maps Optimization</h3>
                    <p className="text-sm text-text-body/70">Dominating the 'Map Pack' through proximity and authority
                        signal engineering.</p>
                </div>
                <div
                    className="rounded-2xl bg-white p-8 border border-outline-variant/30 shadow-sm transition-all hover:shadow-md">
                    <span className="material-symbols-outlined text-primary text-3xl mb-4">settings_input_component</span>
                    <h3 className="text-lg font-bold text-text-heading mb-2">Technical SEO Systems</h3>
                    <p className="text-sm text-text-body/70">Hard-coded efficiency that ensures your infrastructure is built
                        to scale.</p>
                </div>
                <div
                    className="rounded-2xl bg-white p-8 border border-outline-variant/30 shadow-sm transition-all hover:shadow-md">
                    <span className="material-symbols-outlined text-primary text-3xl mb-4">track_changes</span>
                    <h3 className="text-lg font-bold text-text-heading mb-2">Conversion Tracking</h3>
                    <p className="text-sm text-text-body/70">Precision analytics that attribute every lead to its specific
                        source.</p>
                </div>
                <div
                    className="rounded-2xl bg-white p-8 border border-outline-variant/30 shadow-sm transition-all hover:shadow-md">
                    <span className="material-symbols-outlined text-primary text-3xl mb-4">troubleshoot</span>
                    <h3 className="text-lg font-bold text-text-heading mb-2">Search Intent Analysis</h3>
                    <p className="text-sm text-text-body/70">Capturing users exactly when they are ready to purchase your
                        service.</p>
                </div>
                <div
                    className="rounded-2xl bg-white p-8 border border-outline-variant/30 shadow-sm transition-all hover:shadow-md">
                    <span className="material-symbols-outlined text-primary text-3xl mb-4">ads_click</span>
                    <h3 className="text-lg font-bold text-text-heading mb-2">Performance Google Ads</h3>
                    <p className="text-sm text-text-body/70">ROI-focused LSA and search campaigns that bypass low-quality
                        traffic.</p>
                </div>
                <div
                    className="rounded-2xl bg-white p-8 border border-outline-variant/30 shadow-sm transition-all hover:shadow-md">
                    <span className="material-symbols-outlined text-primary text-3xl mb-4">monitoring</span>
                    <h3 className="text-lg font-bold text-text-heading mb-2">Competitor Intelligence</h3>
                    <p className="text-sm text-text-body/70">Reverse-engineering competitor success to secure your market
                        share.</p>
                </div>
                <div
                    className="rounded-2xl bg-white p-8 border border-outline-variant/30 shadow-sm transition-all hover:shadow-md">
                    <span className="material-symbols-outlined text-primary text-3xl mb-4">query_stats</span>
                    <h3 className="text-lg font-bold text-text-heading mb-2">Data Driven Optimization</h3>
                    <p className="text-sm text-text-body/70">Continuous system refinement based on live performance metrics.
                    </p>
                </div>
            </div>
        </div>
    </section>
    {/* Growth Systems Section */}
    <section className="bg-surface py-32" id="services">
        <div className="mx-auto max-w-7xl px-6">
            <div className="mb-20 text-center">
                <h2 className="mb-6 text-4xl font-extrabold text-text-heading poly-sans-feel lg:text-6xl">
                    Engineered Growth Systems &amp; Performance Case Studies
                </h2>
                <div className="h-1.5 w-24 bg-primary rounded-full mx-auto"></div>
                <p className="mt-8 text-xl text-text-body max-w-3xl mx-auto">We build technical performance systems that
                    turn local search intent into predictable revenue. No fluff, just results.</p>
            </div>
            <div className="space-y-16">
                {/* AI Powered Local SEO */}
                <div
                    className="group overflow-hidden rounded-[2.5rem] bg-white shadow-xl transition-all border border-slate-100 reveal reveal-up">
                    <div className="grid lg:grid-cols-2">
                        <div className="p-12 lg:p-16 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-px w-8 bg-primary"></span>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">System 01</span>
                            </div>
                            <h3 className="mb-6 text-4xl font-black text-text-heading poly-sans-feel lg:text-5xl tracking-tight">
                                AI Powered <br/><span className="text-primary">Local SEO</span>
                            </h3>
                            <p className="mb-10 text-lg leading-relaxed text-text-body font-medium">
                                Beyond keywords. We build AI-driven technical infrastructure that dominates local search intent and Google Maps engagement.
                            </p>
                            
                            <div className="mb-12 grid gap-y-5 gap-x-8 sm:grid-cols-2">
                                <div className="flex items-center gap-3">
                                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary text-[14px] font-black">check</span>
                                    </div>
                                    <span className="text-xs font-black text-primary-dark uppercase tracking-widest">AI Search Analysis</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary text-[14px] font-black">check</span>
                                    </div>
                                    <span className="text-xs font-black text-primary-dark uppercase tracking-widest">Technical SEO Systems</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary text-[14px] font-black">check</span>
                                    </div>
                                    <span className="text-xs font-black text-primary-dark uppercase tracking-widest">Entity Optimization</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary text-[14px] font-black">check</span>
                                    </div>
                                    <span className="text-xs font-black text-primary-dark uppercase tracking-widest">Authority Building</span>
                                </div>
                            </div>

                            <button 
                                onClick={() => openModal('seo-modal')}
                                className="group inline-flex items-center gap-3 text-xs font-black text-primary uppercase tracking-[0.2em] hover:text-primary-dark transition-all"
                            >
                                <span className="relative">
                                    Explore SEO Systems
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/20 group-hover:bg-primary transition-all"></span>
                                </span>
                                <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-2">arrow_right_alt</span>
                            </button>
                        </div>
                        <div className="relative flex items-center justify-center p-12 lg:p-20 overflow-hidden bg-slate-50/50">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,93,79,0.05)_0%,transparent_70%)]"></div>
                            <img src="assets/service-ai-seo.png" alt="Technical AI SEO Systems"
                                className="relative z-10 w-full h-auto max-w-sm object-contain drop-shadow-[0_35px_35px_rgba(45,93,79,0.2)] transition-transform duration-700 group-hover:scale-110" />
                        </div>
                    </div>
                </div>
                {/* GBP Growth Optimization */}
                <div
                    className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all border border-slate-100">
                    <div className="grid lg:grid-cols-2">
                        <div
                            className="relative flex items-center justify-center p-8 lg:p-12 order-2 lg:order-1 overflow-hidden bg-primary/5">
                            <img src="assets/service-gbp.jpg" alt="Google Business Profile Optimization"
                                className="relative z-10 w-full h-auto max-w-md object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-bl from-accent-green/10 to-transparent"></div>
                        </div>
                        <div className="p-12 lg:p-16 order-1 lg:order-2">
                            <span
                                className="mb-4 block text-xs font-bold uppercase tracking-widest text-primary font-label">System
                                02</span>
                            <h2 className="mb-6 text-3xl font-bold text-text-heading poly-sans-feel lg:text-4xl">
                                Google Business Profile Optimization That Drives Real Local Growth
                            </h2>
                            <p className="mb-8 text-lg text-text-body/80">Your Google Business Profile is the front door to
                                your business. We optimize every pixel to trigger Google's local ranking algorithms.</p>
                            <div className="mb-10 grid gap-y-4 gap-x-6 sm:grid-cols-2">
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl"
                                        style={{fontVariationSettings: "&quot"}}>check_circle</span>
                                    <span className="text-sm font-semibold text-text-body">Geo-Tagged Photo Strategy</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl"
                                        style={{fontVariationSettings: "&quot"}}>check_circle</span>
                                    <span className="text-sm font-semibold text-text-body">Review Extraction Systems</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl"
                                        style={{fontVariationSettings: "&quot"}}>check_circle</span>
                                    <span className="text-sm font-semibold text-text-body">Entity Signal Injection</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl"
                                        style={{fontVariationSettings: "&quot"}}>check_circle</span>
                                    <span className="text-sm font-semibold text-text-body">Category &amp; Attribute
                                        Tune-up</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl"
                                        style={{fontVariationSettings: "&quot"}}>check_circle</span>
                                    <span className="text-sm font-semibold text-text-body">Local Post Frequency AI</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl"
                                        style={{fontVariationSettings: "&quot"}}>check_circle</span>
                                    <span className="text-sm font-semibold text-text-body">Spam Fighter Protocol</span>
                                </div>
                            </div>
                            <button 
                                onClick={() => openModal('gbp-modal')}
                                className="group inline-flex items-center gap-3 text-xs font-black text-primary uppercase tracking-[0.2em] hover:text-primary-dark transition-all"
                            >
                                <span className="relative">
                                    Explore GBP Systems
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/20 group-hover:bg-primary transition-all"></span>
                                </span>
                                <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-2">arrow_right_alt</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Performance Google Ads */}
                <div
                    className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all border border-slate-100">
                    <div className="grid lg:grid-cols-2">
                        <div className="p-12 lg:p-16">
                            <span
                                className="mb-4 block text-xs font-bold uppercase tracking-widest text-primary font-label">System
                                03</span>
                            <h2 className="mb-6 text-3xl font-bold text-text-heading poly-sans-feel lg:text-4xl">
                                Performance Google Ads Systems For Qualified Lead Generation
                            </h2>
                            <p className="mb-8 text-lg text-text-body/80">Stop burning money on general clicks. We build LSA
                                and Search campaigns that capture the highest intent traffic in your local area.</p>
                            <div className="mb-10 grid gap-y-4 gap-x-6 sm:grid-cols-2">
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl"
                                        style={{fontVariationSettings: "&quot"}}>check_circle</span>
                                    <span className="text-sm font-semibold text-text-body">Local Service Ads (LSA)
                                        Setup</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl"
                                        style={{fontVariationSettings: "&quot"}}>check_circle</span>
                                    <span className="text-sm font-semibold text-text-body">High-Intent Keyword
                                        Capture</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl"
                                        style={{fontVariationSettings: "&quot"}}>check_circle</span>
                                    <span className="text-sm font-semibold text-text-body">Performance Landing Pages</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl"
                                        style={{fontVariationSettings: "&quot"}}>check_circle</span>
                                    <span className="text-sm font-semibold text-text-body">Negative Keyword
                                        Blacklisting</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl"
                                        style={{fontVariationSettings: "&quot"}}>check_circle</span>
                                    <span className="text-sm font-semibold text-text-body">Conversion Tracking
                                        Precision</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl"
                                        style={{fontVariationSettings: "&quot"}}>check_circle</span>
                                    <span className="text-sm font-semibold text-text-body">ROI-Focused Bidding</span>
                                </div>
                            </div>
                            <button 
                                onClick={() => openModal('ads-modal')}
                                className="group inline-flex items-center gap-3 text-xs font-black text-primary uppercase tracking-[0.2em] hover:text-primary-dark transition-all"
                            >
                                <span className="relative">
                                    Explore Ads Systems
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/20 group-hover:bg-primary transition-all"></span>
                                </span>
                                <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-2">arrow_right_alt</span>
                            </button>
                        </div>
                        <div
                            className="relative flex items-center justify-center p-8 lg:p-12 overflow-hidden bg-surface-container/30">
                            <img src="assets/service-pmax.png" alt="Performance Google Ads"
                                className="relative z-10 w-full h-auto max-w-md object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* International Markets Expansion Section */}
    <section className="py-32 bg-white" id="industries">
        <div className="mx-auto max-w-7xl px-6">
            <div className="mb-20 text-center">
                <h2 className="mb-4 text-4xl font-extrabold text-text-heading poly-sans-feel lg:text-5xl">
                    Industries We Help Scale With Local Search Intelligence
                </h2>
                <p className="text-lg text-text-body/70 max-w-2xl mx-auto">Scaling high-performance local businesses across
                    the most competitive international markets.</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-5 md:grid-cols-3">
                {/* Healthcare */}
                <div className="group flex flex-col gap-4 reveal reveal-up" style={{transitionDelay: "0.1s"}}>
                    <div
                        className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md transition-transform group-hover:-translate-y-2">
                        <img alt="Healthcare" className="h-full w-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSF0ZB1PodC1eKI2dSMzJ-83drTkjkS-k8Skw3xS-24vF5nWnWjxxQGPV5_2wtKDpOXQUmUs2hZRCgbJp7mFpN6LctRU5G2VoIqQgYLrcImCsK46_HoPlpQmM2csXG8-DYo_GrOwOm_GHJ32KNpu9HL8X-sKi73vBx6-9VSAoUTXIp3Y02o5JK6qyLG4iW9QSKnAnIriteMD-40LL8YytVmzey3_FDl9d5apJgUuK9lWm4C4Sa7e2UmdBoCw07iX51iDbemNSnNpY" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <div className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest mb-1">Sectors
                            </div>
                            <div className="text-sm font-bold text-white">Dentists, Clinics, MedSpas</div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-text-heading">Healthcare</h4>
                        <p className="text-xs text-text-body/60 mt-1">USA, UK, Canada, UAE, Australia</p>
                    </div>
                </div>
                {/* Hospitality */}
                <div className="group flex flex-col gap-4">
                    <div
                        className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md transition-transform group-hover:-translate-y-2">
                        <img alt="Hospitality" className="h-full w-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAueP-ojElzRS9uJouAEJy7Zg9st_U045-e6cRbs-R36pA3A3ZzUQLoZnQ5LTc-sC-_fQA6ZZeyZtP_5JL8X-wa2cDSqhoIP8aOadBsHMC4WLXTzXWxihLQ9h7NXdHs51ciWVNUqgB8-SYAhnEMnNBsYv5b60xNOp-I7SjUBV2CbTnFCHxafA5bpHso1tRQDmhKe-uk_R0uwWkeuOFlspMbFevgHZZQ7-Yq4uvXN081NmtzzuASSKIpco2l_E7ZEk_4Jstxew36QcY" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <div className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest mb-1">Sectors
                            </div>
                            <div className="text-sm font-bold text-white">Fine Dining, Cafes, Bars</div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-text-heading">Hospitality</h4>
                        <p className="text-xs text-text-body/60 mt-1">USA, UK, UAE, India, Singapore</p>
                    </div>
                </div>
                {/* Home Services */}
                <div className="group flex flex-col gap-4">
                    <div
                        className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md transition-transform group-hover:-translate-y-2">
                        <img alt="Home Services" className="h-full w-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuUggx-52nxD4ntMXqJFvx0oDJ9aJTGqqzMBj5NBYqYb_Pzw6FBmHrFBKSo1Z0DWV51LVipWycHH7YrdAwwQSG2V0kOX_p58LT1-NXtRuscMLkairBrB_7ufZktMFKlSCqrkCEYt_YgmVXxvzClasR3ena8P7r3q8xCwqf_i--c7s0KU3Cy4ZXUv8tGSbrgA9F1pQGYYVyfuyeHbES0QZD91uYfRIL398PU6r7XrDO7Et8-BngkiKsM4UWKfijj31ggTx5iMSpmqE" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <div className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest mb-1">Sectors
                            </div>
                            <div className="text-sm font-bold text-white">HVAC, Plumbing, Solar</div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-text-heading">Home Services</h4>
                        <p className="text-xs text-text-body/60 mt-1">USA, Canada, UK, Australia</p>
                    </div>
                </div>
                {/* Real Estate */}
                <div className="group flex flex-col gap-4">
                    <div
                        className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md transition-transform group-hover:-translate-y-2">
                        <div className="absolute inset-0 bg-[#2d5d4f]/20"></div>
                        <img alt="Real Estate" className="h-full w-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBk6QuuZXTa3thMJnlIT8Kik_OofGix9fP9lzmUwVOBw8vUGfhQ4vIAqpMG9l74QEOOKL7Bhc0K9q6nKk2E5eU3JsFRX4XQGKwKAYvhaSm_CF0G-gUZxt3jm4MSZr_d88S_sOEwWa2L3JL65ENNyaO7YxNReB7WCUtunpVNIERteX35mbsjzvg3LPqDFeRTeU4WXT_ejZdJsfdtctAH4dQ_7vHt75LxeLqg7bNm25jY5L8p1EbXbx2Lw4uebsFIcpz-Olyzlks004" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <div className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest mb-1">Sectors
                            </div>
                            <div className="text-sm font-bold text-white">Agencies, Brokerages</div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-text-heading">Real Estate</h4>
                        <p className="text-xs text-text-body/60 mt-1">UAE (Dubai), USA, UK, Canada</p>
                    </div>
                </div>
                {/* Wellness */}
                <div className="group flex flex-col gap-4">
                    <div
                        className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md transition-transform group-hover:-translate-y-2">
                        <img alt="Wellness" className="h-full w-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZGxP09A1Pq5_lQ7U9scQjGpWfM0UnyUeZ-j-sXYUaIh0h-5CN9Sqot9_014A6OuntdcnUL66Sb-hvzOHsmcYhrrSd4dz-L1n904jSp-UNxfb6sga_nDk5DgSODa3U5vRs4gjmcaPXzpETl2_TgURLwo4Ygp8koxx6q3Q6l65r3TeHqMf9AnHpfGOVktkIHHqA9uZ3ddgg_S5Bzn3NnhL8qvHViEdVFfkZARFKheynp5qns39RKgrkgmL5plIyZKoRSOpyNF9XiQw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <div className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest mb-1">Sectors
                            </div>
                            <div className="text-sm font-bold text-white">Gyms, Yoga, Spas</div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-text-heading">Wellness</h4>
                        <p className="text-xs text-text-body/60 mt-1">USA, UK, Europe, Australia</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Results Section */}
    <section className="bg-background-light py-32" id="results">
        <div className="mx-auto max-w-7xl px-6">
            <div className="mb-20 text-center">
                <h2 className="text-4xl font-extrabold text-text-heading poly-sans-feel lg:text-5xl">Proven Performance
                    Metrics</h2>
                <p className="mt-4 text-text-body/70">We don't talk about rankings. We talk about ROI.</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
                <div
                    className="rounded-3xl bg-white p-12 shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all hover:shadow-xl">
                    <div className="mb-4 text-5xl font-black text-primary">314%</div>
                    <h5 className="text-lg font-bold text-text-heading mb-2">Maps Visibility Increase</h5>
                    <p className="text-sm text-text-body/70 leading-relaxed">Average increase in total search impressions
                        within the first 90 days of system deployment.</p>
                </div>
                <div
                    className="rounded-3xl bg-white p-12 shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all hover:shadow-xl">
                    <div className="mb-4 text-5xl font-black text-text-heading">48%</div>
                    <h5 className="text-lg font-bold text-text-heading mb-2">Lower Cost Per Lead</h5>
                    <p className="text-sm text-text-body/70 leading-relaxed">Reduction in lead acquisition costs by
                        transitioning from blind ads to technical SEO capture.</p>
                </div>
                <div
                    className="rounded-3xl bg-white p-12 shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all hover:shadow-xl">
                    <div className="mb-4 text-5xl font-black text-accent-green">12.4x</div>
                    <h5 className="text-lg font-bold text-text-heading mb-2">Average ROI</h5>
                    <p className="text-sm text-text-body/70 leading-relaxed">Documented return on investment across our
                        portfolio of local service clients.</p>
                </div>
            </div>
        </div>
    </section>
    {/* Final CTA */}
    <section className="py-32 bg-white" id="process">
        <div className="mx-auto max-w-7xl px-6">
            <div className="mb-20 text-center">
                <h2 className="mb-6 text-4xl font-extrabold text-text-heading poly-sans-feel lg:text-6xl">The Growth Process
                </h2>
                <div className="h-1.5 w-24 bg-primary rounded-full mx-auto"></div>
            </div>
            <div className="relative">
                <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-primary/20 z-0"></div>
                <div className="grid gap-8 lg:grid-cols-5 md:grid-cols-2 relative z-10">
                    {/* Step 1 */}
                    <div className="group flex flex-col items-center text-center reveal reveal-up"
                        style={{transitionDelay: "0.1s"}}>
                        <div
                            className="h-24 w-24 rounded-full bg-white border-4 border-primary/20 text-primary flex items-center justify-center font-bold text-3xl mb-6 shadow-xl transition-all group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-white magnetic-btn">
                            1</div>
                        <h4 className="text-xl font-bold text-text-heading mb-3">Audit</h4>
                        <p
                            className="text-sm leading-relaxed text-text-body/70 opacity-0 group-hover:opacity-100 transition-opacity">
                            Deep-dive into technical footprint & account-level competition.</p>
                    </div>
                    {/* Step 2 */}
                    <div className="group flex flex-col items-center text-center reveal reveal-up"
                        style={{transitionDelay: "0.2s"}}>
                        <div
                            className="h-24 w-24 rounded-full bg-white border-4 border-primary/20 text-primary flex items-center justify-center font-bold text-3xl mb-6 shadow-xl transition-all group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-white magnetic-btn">
                            2</div>
                        <h4 className="text-xl font-bold text-text-heading mb-3">Strategy</h4>
                        <p
                            className="text-sm leading-relaxed text-text-body/70 opacity-0 group-hover:opacity-100 transition-opacity">
                            Architecting a custom technical system for your service area.</p>
                    </div>
                    {/* Step 3 */}
                    <div className="group flex flex-col items-center text-center reveal reveal-up"
                        style={{transitionDelay: "0.3s"}}>
                        <div
                            className="h-24 w-24 rounded-full bg-white border-4 border-primary/20 text-primary flex items-center justify-center font-bold text-3xl mb-6 shadow-xl transition-all group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-white magnetic-btn">
                            3</div>
                        <h4 className="text-xl font-bold text-text-heading mb-3">Optimize</h4>
                        <p
                            className="text-sm leading-relaxed text-text-body/70 opacity-0 group-hover:opacity-100 transition-opacity">
                            Deploying code-level changes and GBP signal injections.</p>
                    </div>
                    {/* Step 4 */}
                    <div className="group flex flex-col items-center text-center reveal reveal-up"
                        style={{transitionDelay: "0.4s"}}>
                        <div
                            className="h-24 w-24 rounded-full bg-white border-4 border-primary/20 text-primary flex items-center justify-center font-bold text-3xl mb-6 shadow-xl transition-all group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-white magnetic-btn">
                            4</div>
                        <h4 className="text-xl font-bold text-text-heading mb-3">Track</h4>
                        <p
                            className="text-sm leading-relaxed text-text-body/70 opacity-0 group-hover:opacity-100 transition-opacity">
                            Real-time monitoring of visibility index expansion.</p>
                    </div>
                    {/* Step 5 */}
                    <div className="group flex flex-col items-center text-center reveal reveal-up"
                        style={{transitionDelay: "0.5s"}}>
                        <div
                            className="h-24 w-24 rounded-full bg-white border-4 border-primary/20 text-primary flex items-center justify-center font-bold text-3xl mb-6 shadow-xl transition-all group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-white magnetic-btn">
                            5</div>
                        <h4 className="text-xl font-bold text-text-heading mb-3">Scale</h4>
                        <p
                            className="text-sm leading-relaxed text-text-body/70 opacity-0 group-hover:opacity-100 transition-opacity">
                            Multiplying success across new locations and categories.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Case Studies Section */}
    <section className="py-32 bg-surface" id="work">
        <div className="mx-auto max-w-7xl px-6">
            <div className="mb-20 text-center reveal reveal-up">
                <h2 className="text-4xl font-extrabold text-text-heading poly-sans-feel lg:text-6xl">Impact Across
                    Industries</h2>
                <p className="mt-6 text-lg text-text-body/70">Engineered growth systems delivered for market leaders and
                    innovators.</p>
                <div className="mt-8 h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
            </div>            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Case Study 01: Shreeji Precast */}
                <div className="group/card bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 reveal reveal-up overflow-hidden flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                        <img src="assets/case_shreeji.png" alt="Shreeji Precast" className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                    <div className="p-8 md:p-10 flex flex-col h-full">
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 rounded-lg border border-primary/10 bg-primary/5 text-[9px] font-black text-primary uppercase tracking-widest">Local SEO</span>
                            <span className="px-3 py-1 rounded-lg border border-primary/10 bg-primary/5 text-[9px] font-black text-primary uppercase tracking-widest">GBP Optimization</span>
                        </div>
                        <h3 className="text-2xl font-black text-text-heading mb-4 tracking-tight leading-tight">Shreeji Precast</h3>
                        <p className="text-sm text-text-body/70 mb-8 leading-relaxed">
                            Engineered a hyper-local visibility system for this Gujarat-based manufacturer, improving Maps discoverability.
                        </p>
                        <div className="mt-auto pt-8 border-t border-slate-50 mb-8">
                            <div className="text-3xl font-black text-primary mb-1">18+</div>
                            <div className="text-[10px] font-bold text-text-body/50 uppercase tracking-widest leading-tight">Top-3 Local Industrial Keyword Rankings</div>
                        </div>
                        <a href="javascript:void(0)" onClick={() => openCaseStudy('shreeji-case')}
                            className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link">
                            Analyze Growth System
                            <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-2">arrow_forward</span>
                        </a>
                    </div>
                </div>

                {/* Case Study 02: Mega Retail */}
                <div className="group/card bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 reveal reveal-up overflow-hidden flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                        <img src="assets/case_fmcg.png" alt="Mega Retail Ltd." className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                    <div className="p-8 md:p-10 flex flex-col h-full">
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 rounded-lg border border-primary/10 bg-primary/5 text-[9px] font-black text-primary uppercase tracking-widest">AI Local SEO</span>
                            <span className="px-3 py-1 rounded-lg border border-primary/10 bg-primary/5 text-[9px] font-black text-primary uppercase tracking-widest">Google Ads</span>
                        </div>
                        <h3 className="text-2xl font-black text-text-heading mb-4 tracking-tight leading-tight">Mega Retail Ltd.</h3>
                        <p className="text-sm text-text-body/70 mb-8 leading-relaxed">
                            Developed a scalable acquisition system for this UK-based wholesaler, improving B2B visibility.
                        </p>
                        <div className="mt-auto pt-8 border-t border-slate-50 mb-8">
                            <div className="text-3xl font-black text-primary mb-1">4.1x</div>
                            <div className="text-[10px] font-bold text-text-body/50 uppercase tracking-widest leading-tight">Qualified Wholesale Lead Growth</div>
                        </div>
                        <a href="javascript:void(0)" onClick={() => openCaseStudy('mega-case')}
                            className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link">
                            Analyze Growth System
                            <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-2">arrow_forward</span>
                        </a>
                    </div>
                </div>

                {/* Case Study 03: Anita Skin */}
                <div className="group/card bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 reveal reveal-up overflow-hidden flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                        <img src="assets/case3.png" alt="Anita Skin" className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                    <div className="p-8 md:p-10 flex flex-col h-full">
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 rounded-lg border border-primary/10 bg-primary/5 text-[9px] font-black text-primary uppercase tracking-widest">GBP Optimization</span>
                            <span className="px-3 py-1 rounded-lg border border-primary/10 bg-primary/5 text-[9px] font-black text-primary uppercase tracking-widest">Google Ads</span>
                        </div>
                        <h3 className="text-2xl font-black text-text-heading mb-4 tracking-tight leading-tight">Anita Skin</h3>
                        <p className="text-sm text-text-body/70 mb-8 leading-relaxed">
                            Built a conversion-focused customer acquisition system for this UK-based beauty clinic.
                        </p>
                        <div className="mt-auto pt-8 border-t border-slate-50 mb-8">
                            <div className="text-3xl font-black text-primary mb-1">4.6x</div>
                            <div className="text-[10px] font-bold text-text-body/50 uppercase tracking-widest leading-tight">Appointment Inquiry Growth</div>
                        </div>
                        <a href="javascript:void(0)" onClick={() => openCaseStudy('anita-case')}
                            className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link">
                            Analyze Growth System
                            <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-2">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Blog Feed Section (Dynamic) */}
    <section className="py-32 bg-white" id="blog">
        <div className="mx-auto max-w-7xl px-6">
            <div className="mb-20 text-center reveal reveal-up">
                <h2 className="text-4xl font-extrabold text-text-heading poly-sans-feel lg:text-6xl">Latest Insights</h2>
                <p className="mt-6 text-lg text-text-body/70">Technical deep-dives and growth strategies from the
                    engineering frontlines.</p>
                <div className="mt-8 h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
            </div>

            <HomeInsights />
        </div>
    </section>

    <section className="py-32 bg-inverse-surface overflow-hidden relative">

        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <defs>
                    <pattern height="10" id="grid3" patternUnits="userSpaceOnUse" width="10">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1"></path>
                    </pattern>
                </defs>
                <rect fill="url(#grid3)" height="100" width="100"></rect>
            </svg>
        </div>
        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
            <h2 className="mb-8 text-4xl font-extrabold text-white poly-sans-feel lg:text-6xl">Ready To Dominate Local
                Search?</h2>
            <p className="mb-12 text-lg text-white/70">Discuss your growth goals directly with the experts. Choose your
                preferred strategy session below.</p>
            <div className="grid gap-6 sm:grid-cols-2">
                <a className="group flex flex-col items-center justify-center rounded-3xl bg-primary p-10 text-white transition-all hover:bg-primary-container shadow-2xl hover:scale-[1.02]"
                    href="https://wa.me/917229089082">
                    <span className="material-symbols-outlined text-4xl mb-4">chat</span>
                    <h3 className="text-xl font-bold mb-2">WhatsApp Consultation</h3>
                    <p className="text-sm opacity-80 mb-6">Quick response for immediate growth questions.</p>
                    <span
                        className="px-6 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest group-hover:bg-white group-hover:text-primary transition-colors">Start
                        Chat</span>
                </a>
                <a className="group flex flex-col items-center justify-center rounded-3xl bg-white p-10 text-text-heading transition-all shadow-2xl hover:scale-[1.02]"
                    href="mailto:jatin@jrgrowth.tech">
                    <span className="material-symbols-outlined text-4xl mb-4 text-primary">mail</span>
                    <h3 className="text-xl font-bold mb-2">Email Strategy</h3>
                    <p className="text-sm text-text-body/70 mb-6">In-depth discussion for partnerships and projects.</p>
                    <span
                        className="px-6 py-2 bg-primary/10 rounded-full text-xs font-bold uppercase tracking-widest group-hover:bg-primary group-hover:text-white transition-colors">Send
                        Email</span>
                </a>
            </div>
        </div>
    </section>

    {/* Founder Section */}
    <section className="py-32 bg-white overflow-hidden" id="about">
        <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
                {/* Left: Creative Image & Stat */}
                <div className="relative reveal reveal-left">
                    <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl">
                        <img src="assets/founder.jpg" alt="Jatin Raiyani" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -right-6 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
                    <div className="absolute -top-6 -left-6 h-64 w-64 rounded-full bg-accent-green/5 blur-3xl"></div>

                    {/* Floating Experience Card */}
                    <div className="absolute -right-8 bottom-12 z-20 rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-black/5 reveal reveal-right"
                        style={{transitionDelay: "0.3s"}}>
                        <div className="text-center">
                            <div className="text-4xl font-black text-primary">6+</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-text-body/60 mt-1">Years
                                Engineering</div>
                        </div>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="reveal reveal-right">
                    <div
                        className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary font-label">
                        Founder & Lead Strategist
                    </div>
                    <h2 className="mb-8 text-4xl font-extrabold text-text-heading poly-sans-feel lg:text-6xl">The Growth
                        Architect</h2>
                    <p className="text-lg leading-relaxed text-text-body/80 mb-8">
                        I am <span className="font-bold text-text-heading">Jatin Raiyani</span>, a Computer Software
                        Engineer from Surat with a precision-driven approach to the digital landscape.
                    </p>
                    <div className="space-y-6">
                        <div
                            className="flex gap-4 p-6 rounded-2xl bg-surface-container/30 border border-outline-variant/20 hover:border-primary/30 transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-primary text-3xl">code</span>
                            <div>
                                <h4 className="font-bold text-text-heading mb-1">Engineering Foundation</h4>
                                <p className="text-sm text-text-body/70 leading-relaxed">6+ years in full-stack software
                                    development, ensuring every growth strategy is backed by technical excellence and
                                    code-level precision.</p>
                            </div>
                        </div>
                        <div
                            className="flex gap-4 p-6 rounded-2xl bg-surface-container/30 border border-outline-variant/20 hover:border-primary/30 transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-primary text-3xl">trending_up</span>
                            <div>
                                <h4 className="font-bold text-text-heading mb-1">SEO & Performance Ads</h4>
                                <p className="text-sm text-text-body/70 leading-relaxed">4+ years specialized in
                                    architecting high-intent local search systems and performance-driven ad campaigns
                                    that convert clicks into customers.</p>
                            </div>
                        </div>
                    </div>
                    <p className="mt-8 text-sm text-text-body/60 italic leading-relaxed">
                        "I don't just optimize for search; I engineer for authority and sustainable business growth. My
                        mission is to bridge the gap between complex technology and real-world results."
                    </p>
                    <div className="mt-10 flex items-center gap-6">
                        <img src="assets/logo.png" alt="JR Growth" className="h-8 w-auto grayscale opacity-50" />
                        <div className="h-8 w-px bg-outline-variant/30"></div>
                        <div className="text-xs font-bold uppercase tracking-tighter text-text-body/40">Surat, Gujarat,
                            India</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* FAQ Section */}
    <section className="py-32 bg-surface" id="faq">
        <div className="mx-auto max-w-4xl px-6">
            <div className="mb-16 text-center reveal reveal-up">
                <h2 className="text-4xl font-extrabold text-text-heading poly-sans-feel lg:text-5xl">Frequently Asked
                    Questions</h2>
                <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="space-y-4">
                {/* FAQ Item 1 */}
                <div className="reveal reveal-up group rounded-2xl bg-white border border-outline-variant/30 overflow-hidden"
                    style={{transitionDelay: "0.1s"}}>
                    <button className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                        onClick={(e) => { e.currentTarget.nextElementSibling?.classList.toggle('hidden'); e.currentTarget.querySelector('.arrow')?.classList.toggle('rotate-180'); }}>
                        <span className="text-lg font-bold text-text-heading">How soon can I see results on Google
                            Maps?</span>
                        <span className="material-symbols-outlined arrow transition-transform">expand_more</span>
                    </button>
                    <div className="hidden px-6 pb-6 text-text-body/70 leading-relaxed">
                        While SEO is a long-term strategy, our technical GBP signal injections usually start showing
                        visibility increases within the first 30 to 60 days. Major ranking shifts typically occur
                        between months 3 and 6.
                    </div>
                </div>

                {/* FAQ Item 2 */}
                <div className="reveal reveal-up group rounded-2xl bg-white border border-outline-variant/30 overflow-hidden"
                    style={{transitionDelay: "0.2s"}}>
                    <button className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                        onClick={(e) => { e.currentTarget.nextElementSibling?.classList.toggle('hidden'); e.currentTarget.querySelector('.arrow')?.classList.toggle('rotate-180'); }}>
                        <span className="text-lg font-bold text-text-heading">Do you work with businesses outside of
                            India?</span>
                        <span className="material-symbols-outlined arrow transition-transform">expand_more</span>
                    </button>
                    <div className="hidden px-6 pb-6 text-text-body/70 leading-relaxed">
                        Yes, we specialize in high-competition international markets including the USA, UK, Canada, UAE,
                        and Australia. Our systems are built to handle the technical nuances of global local search.
                    </div>
                </div>

                {/* FAQ Item 3 */}
                <div className="reveal reveal-up group rounded-2xl bg-white border border-outline-variant/30 overflow-hidden"
                    style={{transitionDelay: "0.3s"}}>
                    <button className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                        onClick={(e) => { e.currentTarget.nextElementSibling?.classList.toggle('hidden'); e.currentTarget.querySelector('.arrow')?.classList.toggle('rotate-180'); }}>
                        <span className="text-lg font-bold text-text-heading">Is this a one-time setup or a monthly
                            service?</span>
                        <span className="material-symbols-outlined arrow transition-transform">expand_more</span>
                    </button>
                    <div className="hidden px-6 pb-6 text-text-body/70 leading-relaxed">
                        We offer both. While our initial technical audit and setup create a strong foundation, the local
                        search landscape is dynamic. Monthly optimization ensures you maintain rankings against
                        aggressive competitors.
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Footer */}
    <footer className="bg-white py-20 border-t border-outline-variant/30">
        <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-4">
                <div className="col-span-1 lg:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <img alt="JR GROWTH" className="w-auto object-contain h-12" src="assets/logo.png" />
                    </div>
                    <p className="text-sm text-text-body/70 leading-relaxed">JR Growth provides AI Powered Local SEO, Google Business Profile Optimization, and Performance Google Ads services for businesses looking to improve Google Maps visibility, search rankings, and qualified lead generation worldwide.</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        {/* Social Icons: FB, IG, LinkedIn, Google, WhatsApp */}
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
                        <li className=""><a className="hover:text-primary transition-colors" href="javascript:void(0)" onClick={() => openModal('seo-modal')}>AI Powered Local SEO</a>
                        </li>
                        <li className=""><a className="hover:text-primary transition-colors" href="javascript:void(0)" onClick={() => openModal('gbp-modal')}>GBP Optimization</a></li>
                        <li className=""><a className="hover:text-primary transition-colors" href="javascript:void(0)" onClick={() => openModal('ads-modal')}>Performance Google Ads</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-sm font-bold text-text-heading mb-6 uppercase tracking-widest font-label">Markets
                    </h4>
                    <ul className="space-y-4 text-sm text-text-body/70">
                        <li className=""><a className="hover:text-primary transition-colors" href="#">Healthcare (Global)</a>
                        </li>
                        <li className=""><a className="hover:text-primary transition-colors" href="#">Home Services
                                (NA/EMEA)</a></li>
                        <li className=""><a className="hover:text-primary transition-colors" href="#">Hospitality (Global)</a>
                        </li>
                        <li className=""><a className="hover:text-primary transition-colors" href="#">Real Estate (MENA/NA)</a>
                        </li>
                        <li className=""><a className="hover:text-primary transition-colors" href="#">Wellness (APAC/Global)</a>
                        </li>
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

    {/* SEO Systems Modal */}
    <div id="seo-modal" className="fixed inset-0 z-[100] hidden">
        <div className="absolute inset-0 bg-primary-dark/40 backdrop-blur-md transition-opacity duration-500" onClick={() => closeModal('seo-modal')}></div>
        <div className="absolute right-0 top-0 h-full w-full max-w-4xl bg-white shadow-2xl transition-transform duration-500 translate-x-full overflow-y-auto custom-scrollbar" id="seo-modal-content">
            <div className="sticky top-0 z-20 flex items-center justify-between bg-white/90 p-4 md:p-8 backdrop-blur-md border-b border-slate-50">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-primary flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-xl md:text-2xl">psychology</span>
                    </div>
                    <div>
                        <h2 className="text-lg md:text-xl font-black text-primary-dark uppercase tracking-tight">AI Powered SEO</h2>
                        <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Technical Framework v4.2</p>
                    </div>
                </div>
                <button onClick={() => closeModal('seo-modal')} className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-all hover:bg-red-50 hover:text-red-500">
                    <span className="material-symbols-outlined text-xl">close</span>
                </button>
            </div>

            <div className="p-6 md:p-12 lg:p-20 space-y-16 md:space-y-24">
                <section>
                    <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-6">The Evolution of Search</h3>
                    <div className="space-y-6">
                        <p className="text-xl md:text-3xl font-black text-primary-dark leading-tight">Modern Local SEO is no longer just about keywords or backlinks.</p>
                        <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">Google now evaluates local businesses based on search intent, technical infrastructure, and behavioral trust signals. Our AI-powered system is designed to dominate these modern ranking factors.</p>
                    </div>
                </section>

                <section className="p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-[#185441] text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#c7fbe8] mb-8">Optimization Approach</h3>
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                            <ul className="space-y-3 md:space-y-4">
                                <li className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-tight"><span className="h-1 w-1 rounded-full bg-[#c7fbe8]"></span>AI-Driven Search Analysis</li>
                                <li className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-tight"><span className="h-1 w-1 rounded-full bg-[#c7fbe8]"></span>Local Competitor Intelligence</li>
                                <li className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-tight"><span className="h-1 w-1 rounded-full bg-[#c7fbe8]"></span>Technical SEO Systems</li>
                                <li className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-tight"><span className="h-1 w-1 rounded-full bg-[#c7fbe8]"></span>Structured Data Architecture</li>
                                <li className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-tight"><span className="h-1 w-1 rounded-full bg-[#c7fbe8]"></span>Semantic Entity Optimization</li>
                                <li className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-tight"><span className="h-1 w-1 rounded-full bg-[#c7fbe8]"></span>High-Authority Link Assets</li>
                            </ul>
                            <div className="flex flex-col justify-center gap-4">
                                <div className="p-4 rounded-2xl bg-white/10 border border-white/20 text-center">
                                    <p className="text-2xl font-black">Entity Flow</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#c7fbe8]">Local Relevance Matrix</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex items-center justify-between mb-10 md:mb-12">
                        <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Core Deliverables</h3>
                        <span className="h-px flex-1 bg-slate-100 mx-4 md:mx-8"></span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6">
                        <div className="flex items-center gap-3 md:gap-4 group/list cursor-default">
                            <div className="h-7 w-7 md:h-8 md:w-8 rounded-lg md:rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover/list:bg-primary group-hover/list:text-white transition-all"><span className="material-symbols-outlined text-[16px] md:text-[18px]">check_circle</span></div>
                            <span className="text-xs md:text-sm font-bold text-primary-dark group-hover/list:translate-x-1 transition-transform">Advanced GSC Integration</span>
                        </div>
                        <div className="flex items-center gap-3 md:gap-4 group/list cursor-default">
                            <div className="h-7 w-7 md:h-8 md:w-8 rounded-lg md:rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover/list:bg-primary group-hover/list:text-white transition-all"><span className="material-symbols-outlined text-[16px] md:text-[18px]">check_circle</span></div>
                            <span className="text-xs md:text-sm font-bold text-primary-dark group-hover/list:translate-x-1 transition-transform">Schema Markup Injection</span>
                        </div>
                        <div className="flex items-center gap-3 md:gap-4 group/list cursor-default">
                            <div className="h-7 w-7 md:h-8 md:w-8 rounded-lg md:rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover/list:bg-primary group-hover/list:text-white transition-all"><span className="material-symbols-outlined text-[16px] md:text-[18px]">check_circle</span></div>
                            <span className="text-xs md:text-sm font-bold text-primary-dark group-hover/list:translate-x-1 transition-transform">Core Web Vitals Opt</span>
                        </div>
                        <div className="flex items-center gap-3 md:gap-4 group/list cursor-default">
                            <div className="h-7 w-7 md:h-8 md:w-8 rounded-lg md:rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover/list:bg-primary group-hover/list:text-white transition-all"><span className="material-symbols-outlined text-[16px] md:text-[18px]">check_circle</span></div>
                            <span className="text-xs md:text-sm font-bold text-primary-dark group-hover/list:translate-x-1 transition-transform">Localized Landing Pages</span>
                        </div>
                    </div>
                </section>

                <section className="bg-primary p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] text-white flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between">
                    <div className="text-center md:text-left">
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary-light mb-2">Technical Audit</p>
                        <h4 className="text-xl md:text-2xl font-black tracking-tight leading-tight">Ready to dominate local search?</h4>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 w-full md:w-auto">
                        <a href="https://wa.me/917229089082" className="flex items-center justify-center gap-2 rounded-xl md:rounded-2xl bg-white px-6 md:px-8 py-3 md:py-4 text-[10px] md:text-xs font-black text-primary uppercase tracking-widest shadow-xl transition-all hover:scale-105 active:scale-95"><span className="material-symbols-outlined text-lg">chat</span>WhatsApp</a>
                        <a href="mailto:jatin@jrgrowth.tech" className="flex items-center justify-center gap-2 rounded-xl md:rounded-2xl bg-primary-dark px-6 md:px-8 py-3 md:py-4 text-[10px] md:text-xs font-black text-white uppercase tracking-widest transition-all hover:bg-black active:scale-95"><span className="material-symbols-outlined text-lg">mail</span>Email Strategy</a>
                    </div>
                </section>
            </div>
            <div className="h-20 md:h-32"></div>
        </div>
    </div>

    {/* GBP Systems Modal */}
    <div id="gbp-modal" className="fixed inset-0 z-[100] hidden">
        <div className="absolute inset-0 bg-primary-dark/40 backdrop-blur-md transition-opacity duration-500" onClick={() => closeModal('gbp-modal')}></div>
        <div className="absolute right-0 top-0 h-full w-full max-w-4xl bg-white shadow-2xl transition-transform duration-500 translate-x-full overflow-y-auto custom-scrollbar" id="gbp-modal-content">
            <div className="sticky top-0 z-20 flex items-center justify-between bg-white/90 p-4 md:p-8 backdrop-blur-md border-b border-slate-50">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-primary flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-xl md:text-2xl">storefront</span>
                    </div>
                    <div>
                        <h2 className="text-lg md:text-xl font-black text-primary-dark uppercase tracking-tight">GBP Optimization</h2>
                        <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Visibility Framework v3.1</p>
                    </div>
                </div>
                <button onClick={() => closeModal('gbp-modal')} className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-all hover:bg-red-50 hover:text-red-500">
                    <span className="material-symbols-outlined text-xl">close</span>
                </button>
            </div>

            <div className="p-6 md:p-12 lg:p-20 space-y-16 md:space-y-24">
                <section>
                    <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-6">The Front Door of Your Business</h3>
                    <div className="space-y-6">
                        <p className="text-xl md:text-3xl font-black text-primary-dark leading-tight">Most businesses barely optimize their Google Business Profile.</p>
                        <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">Google evaluates profile completeness, category relevance, engagement activity, and review quality. We build strategic GBP optimization systems designed to improve Maps visibility and increase customer trust.</p>
                    </div>
                </section>

                <section className="p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-[#185441] text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#c7fbe8] mb-8">Growth Systems</h3>
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                            <ul className="space-y-3 md:space-y-4">
                                <li className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-tight"><span className="h-1 w-1 rounded-full bg-[#c7fbe8]"></span>Google Maps Ranking Optimization</li>
                                <li className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-tight"><span className="h-1 w-1 rounded-full bg-[#c7fbe8]"></span>AI-Driven Competitor Analysis</li>
                                <li className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-tight"><span className="h-1 w-1 rounded-full bg-[#c7fbe8]"></span>Review Growth Strategies</li>
                                <li className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-tight"><span className="h-1 w-1 rounded-full bg-[#c7fbe8]"></span>Local Engagement Optimization</li>
                                <li className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-tight"><span className="h-1 w-1 rounded-full bg-[#c7fbe8]"></span>Geo-Tagged Media Injection</li>
                                <li className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-tight"><span className="h-1 w-1 rounded-full bg-[#c7fbe8]"></span>NAP Consistency Management</li>
                            </ul>
                            <div className="flex flex-col justify-center gap-4">
                                <div className="p-4 rounded-2xl bg-white/10 border border-white/20 text-center">
                                    <p className="text-2xl font-black">Maps Mastery</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#c7fbe8]">Local Pack Dominance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex items-center justify-between mb-10 md:mb-12">
                        <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Action Items</h3>
                        <span className="h-px flex-1 bg-slate-100 mx-4 md:mx-8"></span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6">
                        <div className="flex items-center gap-3 md:gap-4 group/list cursor-default">
                            <div className="h-7 w-7 md:h-8 md:w-8 rounded-lg md:rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover/list:bg-primary group-hover/list:text-white transition-all"><span className="material-symbols-outlined text-[16px] md:text-[18px]">check_circle</span></div>
                            <span className="text-xs md:text-sm font-bold text-primary-dark group-hover/list:translate-x-1 transition-transform">Primary Category Optimization</span>
                        </div>
                        <div className="flex items-center gap-3 md:gap-4 group/list cursor-default">
                            <div className="h-7 w-7 md:h-8 md:w-8 rounded-lg md:rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover/list:bg-primary group-hover/list:text-white transition-all"><span className="material-symbols-outlined text-[16px] md:text-[18px]">check_circle</span></div>
                            <span className="text-xs md:text-sm font-bold text-primary-dark group-hover/list:translate-x-1 transition-transform">Service Area Expansion</span>
                        </div>
                        <div className="flex items-center gap-3 md:gap-4 group/list cursor-default">
                            <div className="h-7 w-7 md:h-8 md:w-8 rounded-lg md:rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover/list:bg-primary group-hover/list:text-white transition-all"><span className="material-symbols-outlined text-[16px] md:text-[18px]">check_circle</span></div>
                            <span className="text-xs md:text-sm font-bold text-primary-dark group-hover/list:translate-x-1 transition-transform">Q&A & Reputation Management</span>
                        </div>
                        <div className="flex items-center gap-3 md:gap-4 group/list cursor-default">
                            <div className="h-7 w-7 md:h-8 md:w-8 rounded-lg md:rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover/list:bg-primary group-hover/list:text-white transition-all"><span className="material-symbols-outlined text-[16px] md:text-[18px]">check_circle</span></div>
                            <span className="text-xs md:text-sm font-bold text-primary-dark group-hover/list:translate-x-1 transition-transform">NAP Consistency Signals</span>
                        </div>
                    </div>
                </section>

                <section className="bg-primary p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] text-white flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between">
                    <div className="text-center md:text-left">
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary-light mb-2">Maps Visibility Assessment</p>
                        <h4 className="text-xl md:text-2xl font-black tracking-tight leading-tight">Discuss your GBP visibility</h4>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 w-full md:w-auto">
                        <a href="https://wa.me/917229089082" className="flex items-center justify-center gap-2 rounded-xl md:rounded-2xl bg-white px-6 md:px-8 py-3 md:py-4 text-[10px] md:text-xs font-black text-primary uppercase tracking-widest shadow-xl transition-all hover:scale-105 active:scale-95"><span className="material-symbols-outlined text-lg">chat</span>WhatsApp</a>
                        <a href="mailto:jatin@jrgrowth.tech" className="flex items-center justify-center gap-2 rounded-xl md:rounded-2xl bg-primary-dark px-6 md:px-8 py-3 md:py-4 text-[10px] md:text-xs font-black text-white uppercase tracking-widest transition-all hover:bg-black active:scale-95"><span className="material-symbols-outlined text-lg">mail</span>Email Strategy</a>
                    </div>
                </section>
            </div>
            <div className="h-20 md:h-32"></div>
        </div>
    </div>

    {/* Ads Systems Modal */}
    <div id="ads-modal" className="fixed inset-0 z-[100] hidden">
        <div className="absolute inset-0 bg-primary-dark/40 backdrop-blur-md transition-opacity duration-500" onClick={() => closeModal('ads-modal')}></div>
        <div className="absolute right-0 top-0 h-full w-full max-w-4xl bg-white shadow-2xl transition-transform duration-500 translate-x-full overflow-y-auto custom-scrollbar" id="ads-modal-content">
            <div className="sticky top-0 z-20 flex items-center justify-between bg-white/90 p-4 md:p-8 backdrop-blur-md border-b border-slate-50">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-primary flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-xl md:text-2xl">ads_click</span>
                    </div>
                    <div>
                        <h2 className="text-lg md:text-xl font-black text-primary-dark uppercase tracking-tight">Google Ads Engine</h2>
                        <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Performance Framework v2.0</p>
                    </div>
                </div>
                <button onClick={() => closeModal('ads-modal')} className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-all hover:bg-red-50 hover:text-red-500">
                    <span className="material-symbols-outlined text-xl">close</span>
                </button>
            </div>

            <div className="p-6 md:p-12 lg:p-20 space-y-16 md:space-y-24">
                <section>
                    <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-6">ROI Oriented Acquisition</h3>
                    <div className="space-y-6">
                        <p className="text-xl md:text-3xl font-black text-primary-dark leading-tight">Stop paying for clicks. Start acquiring customers.</p>
                        <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">Most businesses struggle because keyword intent is misunderstood and tracking is broken. We build systems that focus on lead quality and ROAS.</p>
                    </div>
                </section>

                <section className="p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-[#185441] text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#c7fbe8] mb-8">Performance Framework</h3>
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                            <ul className="space-y-3 md:space-y-4">
                                <li className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-tight"><span className="h-1 w-1 rounded-full bg-[#c7fbe8]"></span>AI-Driven Keyword Research</li>
                                <li className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-tight"><span className="h-1 w-1 rounded-full bg-[#c7fbe8]"></span>Competitor Advertising Intelligence</li>
                                <li className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-tight"><span className="h-1 w-1 rounded-full bg-[#c7fbe8]"></span>Conversion Tracking Implementation</li>
                                <li className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-tight"><span className="h-1 w-1 rounded-full bg-[#c7fbe8]"></span>Geographic Targeting Optimization</li>
                                <li className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-tight"><span className="h-1 w-1 rounded-full bg-[#c7fbe8]"></span>Behavioral Audience Targeting</li>
                                <li className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-tight"><span className="h-1 w-1 rounded-full bg-[#c7fbe8]"></span>Scalable Campaign Architecture</li>
                            </ul>
                            <div className="flex flex-col justify-center gap-4">
                                <div className="p-4 rounded-2xl bg-white/10 border border-white/20 text-center">
                                    <p className="text-2xl font-black">Profitable ROI</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#c7fbe8]">Guiding Bidding Strategy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex items-center justify-between mb-10 md:mb-12">
                        <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">What's Included</h3>
                        <span className="h-px flex-1 bg-slate-100 mx-4 md:mx-8"></span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6">
                        <div className="flex items-center gap-3 md:gap-4 group/list cursor-default">
                            <div className="h-7 w-7 md:h-8 md:w-8 rounded-lg md:rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover/list:bg-primary group-hover/list:text-white transition-all"><span className="material-symbols-outlined text-[16px] md:text-[18px]">check_circle</span></div>
                            <span className="text-xs md:text-sm font-bold text-primary-dark group-hover/list:translate-x-1 transition-transform">Search Campaign Setup & Opt</span>
                        </div>
                        <div className="flex items-center gap-3 md:gap-4 group/list cursor-default">
                            <div className="h-7 w-7 md:h-8 md:w-8 rounded-lg md:rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover/list:bg-primary group-hover/list:text-white transition-all"><span className="material-symbols-outlined text-[16px] md:text-[18px]">check_circle</span></div>
                            <span className="text-xs md:text-sm font-bold text-primary-dark group-hover/list:translate-x-1 transition-transform">High-Converting Ad Copy</span>
                        </div>
                        <div className="flex items-center gap-3 md:gap-4 group/list cursor-default">
                            <div className="h-7 w-7 md:h-8 md:w-8 rounded-lg md:rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover/list:bg-primary group-hover/list:text-white transition-all"><span className="material-symbols-outlined text-[16px] md:text-[18px]">check_circle</span></div>
                            <span className="text-xs md:text-sm font-bold text-primary-dark group-hover/list:translate-x-1 transition-transform">Technical Conversion Tracking</span>
                        </div>
                        <div className="flex items-center gap-3 md:gap-4 group/list cursor-default">
                            <div className="h-7 w-7 md:h-8 md:w-8 rounded-lg md:rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover/list:bg-primary group-hover/list:text-white transition-all"><span className="material-symbols-outlined text-[16px] md:text-[18px]">check_circle</span></div>
                            <span className="text-xs md:text-sm font-bold text-primary-dark group-hover/list:translate-x-1 transition-transform">Call Tracking Integration</span>
                        </div>
                        <div className="flex items-center gap-3 md:gap-4 group/list cursor-default">
                            <div className="h-7 w-7 md:h-8 md:w-8 rounded-lg md:rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover/list:bg-primary group-hover/list:text-white transition-all"><span className="material-symbols-outlined text-[16px] md:text-[18px]">check_circle</span></div>
                            <span className="text-xs md:text-sm font-bold text-primary-dark group-hover/list:translate-x-1 transition-transform">Negative Keyword Optimization</span>
                        </div>
                        <div className="flex items-center gap-3 md:gap-4 group/list cursor-default">
                            <div className="h-7 w-7 md:h-8 md:w-8 rounded-lg md:rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover/list:bg-primary group-hover/list:text-white transition-all"><span className="material-symbols-outlined text-[16px] md:text-[18px]">check_circle</span></div>
                            <span className="text-xs md:text-sm font-bold text-primary-dark group-hover/list:translate-x-1 transition-transform">Performance ROI Analytics</span>
                        </div>
                    </div>
                </section>

                <section className="bg-primary p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] text-white flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between">
                    <div className="text-center md:text-left">
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary-light mb-2">Paid Acquisition Audit</p>
                        <h4 className="text-xl md:text-2xl font-black tracking-tight leading-tight">Discuss your Google Ads goals</h4>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 w-full md:w-auto">
                        <a href="https://wa.me/917229089082" className="flex items-center justify-center gap-2 rounded-xl md:rounded-2xl bg-white px-6 md:px-8 py-3 md:py-4 text-[10px] md:text-xs font-black text-primary uppercase tracking-widest shadow-xl transition-all hover:scale-105 active:scale-95"><span className="material-symbols-outlined text-lg">chat</span>WhatsApp</a>
                        <a href="mailto:jatin@jrgrowth.tech" className="flex items-center justify-center gap-2 rounded-xl md:rounded-2xl bg-primary-dark px-6 md:px-8 py-3 md:py-4 text-[10px] md:text-xs font-black text-white uppercase tracking-widest transition-all hover:bg-black active:scale-95"><span className="material-symbols-outlined text-lg">mail</span>Email Strategy</a>
                    </div>
                </section>
            </div>
            <div className="h-20 md:h-32"></div>
        </div>
    </div>


    {/* PREMIUM CASE STUDY MODALS */}
    
    {/* 1. Shreeji Precast Modal */}
    <div id="shreeji-case" className="hidden case-study-modal-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
        <div className="case-study-modal-container relative w-full h-full max-w-[1400px] bg-background-light rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col">
            {/* Sticky Header/Close */}
            <button onClick={() => closeCaseStudy('shreeji-case')} className="close-btn-glass absolute top-6 right-6 md:top-10 md:right-10 z-[110] h-12 w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center transition-all">
                <span className="material-symbols-outlined text-2xl md:text-3xl">close</span>
            </button>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-16 lg:p-24">
                {/* SECTION 01: HERO HEADER */}
                <header className="mb-16 md:mb-24">
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                        <span className="px-4 py-1.5 rounded-full bg-primary/10 text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.2em] font-label">Local SEO</span>
                        <span className="px-4 py-1.5 rounded-full bg-accent-green/10 text-[10px] md:text-xs font-black text-accent-green uppercase tracking-[0.2em] font-label">GBP Optimization</span>
                        <span className="px-4 py-1.5 rounded-full bg-slate-200 text-[10px] md:text-xs font-black text-slate-600 uppercase tracking-[0.2em] font-label">Construction</span>
                        <span className="px-4 py-1.5 rounded-full bg-slate-200 text-[10px] md:text-xs font-black text-slate-600 uppercase tracking-[0.2em] font-label">India Market</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-text-heading poly-sans-feel leading-[1.1] mb-8">Shreeji Precast</h2>
                    <p className="text-lg md:text-2xl text-text-body/70 max-w-4xl leading-relaxed">
                        Engineered a hyper-local visibility system for this Gujarat-based readymade cement folding wall manufacturer, improving Google Maps discoverability and strengthening regional search authority.
                    </p>
                </header>

                {/* SECTION 02: HERO METRICS PANEL */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-32">
                    <div className="stat-card-premium p-8 md:p-10 rounded-3xl">
                        <div className="text-4xl md:text-5xl font-black text-primary mb-2">18+</div>
                        <div className="text-[10px] md:text-xs font-black text-text-body/50 uppercase tracking-widest leading-relaxed">Top 3 Local<br />Industrial Keyword Rankings</div>
                    </div>
                    <div className="stat-card-premium p-8 md:p-10 rounded-3xl">
                        <div className="text-4xl md:text-5xl font-black text-primary mb-2">240%</div>
                        <div className="text-[10px] md:text-xs font-black text-text-body/50 uppercase tracking-widest leading-relaxed">Google Maps<br />Visibility Growth</div>
                    </div>
                    <div className="stat-card-premium p-8 md:p-10 rounded-3xl">
                        <div className="text-4xl md:text-5xl font-black text-primary mb-2">3.4x</div>
                        <div className="text-[10px] md:text-xs font-black text-text-body/50 uppercase tracking-widest leading-relaxed">Qualified<br />Contractor Inquiries</div>
                    </div>
                </section>

                <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
                    <div className="lg:col-span-7 space-y-20 md:space-y-32">
                        {/* SECTION 03: BUSINESS OVERVIEW */}
                        <section>
                            <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                                <span className="h-px w-8 bg-primary"></span> 01 / Overview
                            </h2>
                            <div className="prose prose-lg max-w-none text-text-body/80 space-y-6 text-base md:text-lg">
                                <p>Shreeji Precast is a Valsad-based manufacturer and service provider specializing in readymade cement folding wall solutions for industrial, commercial, agricultural, and construction applications across Gujarat.</p>
                                <p>Despite having strong offline operations and quality infrastructure, the business had limited digital visibility in Google Maps and local search results.</p>
                            </div>
                        </section>

                        {/* SECTION 04: CORE CHALLENGES */}
                        <section>
                            <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                                <span className="h-px w-8 bg-primary"></span> 02 / Critical Blockers
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                                <div className="p-6 md:p-8 rounded-2xl border-2 border-slate-200/60 bg-white">
                                    <span className="material-symbols-outlined text-amber-500 mb-4">visibility_off</span>
                                    <p className="text-sm font-black text-text-heading uppercase tracking-widest mb-2">Weak Discoverability</p>
                                    <p className="text-xs font-medium text-text-body/60 leading-relaxed">Weak Google Maps discoverability and inconsistent local keyword rankings.</p>
                                </div>
                                <div className="p-6 md:p-8 rounded-2xl border-2 border-slate-200/60 bg-white">
                                    <span className="material-symbols-outlined text-amber-500 mb-4">search_off</span>
                                    <p className="text-sm font-black text-text-heading uppercase tracking-widest mb-2">Low Intent Capture</p>
                                    <p className="text-xs font-medium text-text-body/60 leading-relaxed">Low search visibility for commercial keywords and weak local authority signals.</p>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 05: SYSTEMS IMPLEMENTED */}
                        <section>
                            <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                                <span className="h-px w-8 bg-primary"></span> 03 / Engineering Implementation
                            </h2>
                            <div className="space-y-6">
                                <div className="system-module-card p-8 md:p-10 rounded-3xl shadow-sm">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-black text-text-heading uppercase tracking-tight">AI Powered Local SEO</h3>
                                        <span className="px-3 py-1 rounded-lg bg-primary/10 text-[10px] font-bold text-primary uppercase">Core System</span>
                                    </div>
                                    <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Technical SEO Audit</li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Industrial Keyword Mapping</li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Structured Data (JSON-LD)</li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Local Intent Optimization</li>
                                    </ul>
                                </div>
                                <div className="system-module-card p-8 md:p-10 rounded-3xl shadow-sm">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-black text-text-heading uppercase tracking-tight">GBP Growth Optimization</h3>
                                        <span className="px-3 py-1 rounded-lg bg-accent-green/10 text-[10px] font-bold text-accent-green uppercase">Activation</span>
                                    </div>
                                    <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Maps Visibility Optimization</li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Geo-Relevance Improvements</li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Location Authority Signals</li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Review Trust Strategy</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-5 space-y-16">
                        <div className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm sticky top-10">
                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10 flex items-center gap-3">
                                <span className="material-symbols-outlined text-sm">monitoring</span> Performance Trend
                            </h3>
                            <div className="relative h-64 w-full flex items-end gap-2 mb-10 px-4">
                                <div className="flex-1 bg-primary/5 rounded-t-xl" style={{height: "20%"}}></div>
                                <div className="flex-1 bg-primary/20 rounded-t-xl" style={{height: "40%"}}></div>
                                <div className="flex-1 bg-primary/40 rounded-t-xl" style={{height: "60%"}}></div>
                                <div className="flex-1 bg-primary/70 rounded-t-xl" style={{height: "80%"}}></div>
                                <div className="flex-1 bg-primary rounded-t-xl" style={{height: "100%"}}></div>
                                <div className="absolute top-0 right-0 p-4 bg-primary text-white rounded-2xl shadow-xl">
                                    <div className="text-xs font-black uppercase tracking-widest">Growth</div>
                                    <div className="text-2xl font-black">+240%</div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-sm font-black text-text-heading uppercase tracking-widest mb-4">Growth Outcomes</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">verified</span>
                                        <span className="text-sm font-bold text-text-body/70">Improved Maps Visibility by 240%</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">verified</span>
                                        <span className="text-sm font-bold text-text-body/70">18+ Industrial Keywords in Top 3 Rankings</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">verified</span>
                                        <span className="text-sm font-bold text-text-body/70">3.4x Increase in Qualified Inquiries</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECTION 08: FINAL CTA AREA */}
                <footer className="mt-32 pt-20 border-t border-slate-200 text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-text-heading mb-6 tracking-tight">Ready To Build Your Growth System?</h2>
                    <p className="text-lg text-text-body/60 mb-12">Discuss your visibility goals, customer acquisition strategy, and local growth opportunities with JR Growth.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                        <a href="https://wa.me/917229089082" className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                            <span className="material-symbols-outlined">chat</span> WhatsApp Consultation
                        </a>
                        <a href="mailto:jatin@jrgrowth.tech" className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-primary text-primary rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-primary/5 transition-all">
                            <span className="material-symbols-outlined">mail</span> Email Strategy Discussion
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    </div>

    {/* 2. Mega Retail Modal */}
    <div id="mega-case" className="hidden case-study-modal-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
        <div className="case-study-modal-container relative w-full h-full max-w-[1400px] bg-background-light rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col">
            <button onClick={() => closeCaseStudy('mega-case')} className="close-btn-glass absolute top-6 right-6 md:top-10 md:right-10 z-[110] h-12 w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center transition-all">
                <span className="material-symbols-outlined text-2xl md:text-3xl">close</span>
            </button>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-16 lg:p-24">
                <header className="mb-16 md:mb-24">
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                        <span className="px-4 py-1.5 rounded-full bg-primary/10 text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.2em] font-label">AI Local SEO</span>
                        <span className="px-4 py-1.5 rounded-full bg-accent-green/10 text-[10px] md:text-xs font-black text-accent-green uppercase tracking-[0.2em] font-label">Google Ads</span>
                        <span className="px-4 py-1.5 rounded-full bg-slate-200 text-[10px] md:text-xs font-black text-slate-600 uppercase tracking-[0.2em] font-label">FMCG</span>
                        <span className="px-4 py-1.5 rounded-full bg-slate-200 text-[10px] md:text-xs font-black text-slate-600 uppercase tracking-[0.2em] font-label">UK Market</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-text-heading poly-sans-feel leading-[1.1] mb-8">Mega Retail Ltd.</h2>
                    <p className="text-lg md:text-2xl text-text-body/70 max-w-4xl leading-relaxed">
                        Developed a scalable local acquisition system for this UK-based FMCG wholesaler, combining AI-powered Local SEO and performance-driven Google Ads to improve B2B visibility.
                    </p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-32">
                    <div className="stat-card-premium p-8 md:p-10 rounded-3xl">
                        <div className="text-4xl md:text-5xl font-black text-primary mb-2">42%</div>
                        <div className="text-[10px] md:text-xs font-black text-text-body/50 uppercase tracking-widest leading-relaxed">Lower B2B Acquisition Cost</div>
                    </div>
                    <div className="stat-card-premium p-8 md:p-10 rounded-3xl">
                        <div className="text-4xl md:text-5xl font-black text-primary mb-2">4.1x</div>
                        <div className="text-[10px] md:text-xs font-black text-text-body/50 uppercase tracking-widest leading-relaxed">Qualified Wholesale Lead Growth</div>
                    </div>
                    <div className="stat-card-premium p-8 md:p-10 rounded-3xl">
                        <div className="text-4xl md:text-5xl font-black text-primary mb-2">185%</div>
                        <div className="text-[10px] md:text-xs font-black text-text-body/50 uppercase tracking-widest leading-relaxed">Commercial Search Visibility Increase</div>
                    </div>
                </section>

                <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
                    <div className="lg:col-span-7 space-y-20 md:space-y-32">
                        <section>
                            <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                                <span className="h-px w-8 bg-primary"></span> 01 / Overview
                            </h2>
                            <div className="prose prose-lg max-w-none text-text-body/80 space-y-6 text-base md:text-lg">
                                <p>Mega Retail Limited is a UK-based FMCG wholesaler specializing in food and beverage distribution for retail stores, hospitality businesses, and wholesale supply chains.</p>
                                <p>The FMCG wholesale market in the UK is highly competitive and depends heavily on visibility, distribution trust, and fast customer acquisition systems.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                                <span className="h-px w-8 bg-primary"></span> 02 / Critical Blockers
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                                <div className="p-6 md:p-8 rounded-2xl border-2 border-slate-200/60 bg-white">
                                    <span className="material-symbols-outlined text-amber-500 mb-4">search_off</span>
                                    <p className="text-sm font-black text-text-heading uppercase tracking-widest mb-2">Weak Visibility</p>
                                    <p className="text-xs font-medium text-text-body/60 leading-relaxed">Weak local search visibility and inconsistent B2B lead quality.</p>
                                </div>
                                <div className="p-6 md:p-8 rounded-2xl border-2 border-slate-200/60 bg-white">
                                    <span className="material-symbols-outlined text-amber-500 mb-4">payments</span>
                                    <p className="text-sm font-black text-text-heading uppercase tracking-widest mb-2">Cost Inefficiency</p>
                                    <p className="text-xs font-medium text-text-body/60 leading-relaxed">Rising advertising costs and low-intent traffic acquisition.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                                <span className="h-px w-8 bg-primary"></span> 03 / Engineering Implementation
                            </h2>
                            <div className="space-y-6">
                                <div className="system-module-card p-8 md:p-10 rounded-3xl shadow-sm">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-black text-text-heading uppercase tracking-tight">AI Powered Local SEO</h3>
                                        <span className="px-3 py-1 rounded-lg bg-primary/10 text-[10px] font-bold text-primary uppercase">Core System</span>
                                    </div>
                                    <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Keyword & Intent Mapping</li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> B2B Search Optimization</li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Technical SEO Improvements</li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Search Gap Analysis</li>
                                    </ul>
                                </div>
                                <div className="system-module-card p-8 md:p-10 rounded-3xl shadow-sm">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-black text-text-heading uppercase tracking-tight">Performance Google Ads</h3>
                                        <span className="px-3 py-1 rounded-lg bg-accent-green/10 text-[10px] font-bold text-accent-green uppercase">Activation</span>
                                    </div>
                                    <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> High-Intent Search Ads</li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> B2B Conversion Tracking</li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Lead Quality Optimization</li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Remarketing Systems</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-5 space-y-16">
                        <div className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm sticky top-10">
                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10 flex items-center gap-3">
                                <span className="material-symbols-outlined text-sm">monitoring</span> Efficiency Gain
                            </h3>
                            <div className="relative h-64 w-full flex items-end gap-2 mb-10 px-4">
                                <div className="flex-1 bg-red-500/20 rounded-t-xl" style={{height: "90%"}}></div>
                                <div className="flex-1 bg-emerald-500/40 rounded-t-xl" style={{height: "60%"}}></div>
                                <div className="flex-1 bg-emerald-500/60 rounded-t-xl" style={{height: "50%"}}></div>
                                <div className="flex-1 bg-emerald-500/80 rounded-t-xl" style={{height: "45%"}}></div>
                                <div className="flex-1 bg-emerald-500 rounded-t-xl" style={{height: "42%"}}></div>
                                <div className="absolute top-0 right-0 p-4 bg-emerald-500 text-white rounded-2xl shadow-xl">
                                    <div className="text-xs font-black uppercase tracking-widest">CPA Drop</div>
                                    <div className="text-2xl font-black">42%</div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-sm font-black text-text-heading uppercase tracking-widest mb-4">Growth Outcomes</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">verified</span>
                                        <span className="text-sm font-bold text-text-body/70">42% Lower B2B Acquisition Cost</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">verified</span>
                                        <span className="text-sm font-bold text-text-body/70">4.1x Qualified Wholesale Lead Growth</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">verified</span>
                                        <span className="text-sm font-bold text-text-body/70">185% Commercial Search Visibility Increase</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="mt-32 pt-20 border-t border-slate-200 text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-text-heading mb-6 tracking-tight">Ready To Build Your Growth System?</h2>
                    <p className="text-lg text-text-body/60 mb-12">Discuss your visibility goals, customer acquisition strategy, and local growth opportunities with JR Growth.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                        <a href="https://wa.me/917229089082" className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                            <span className="material-symbols-outlined">chat</span> WhatsApp Consultation
                        </a>
                        <a href="mailto:jatin@jrgrowth.tech" className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-primary text-primary rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-primary/5 transition-all">
                            <span className="material-symbols-outlined">mail</span> Email Strategy Discussion
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    </div>

    {/* 3. Anita Skin Modal */}
    <div id="anita-case" className="hidden case-study-modal-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
        <div className="case-study-modal-container relative w-full h-full max-w-[1400px] bg-background-light rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col">
            <button onClick={() => closeCaseStudy('anita-case')} className="close-btn-glass absolute top-6 right-6 md:top-10 md:right-10 z-[110] h-12 w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center transition-all">
                <span className="material-symbols-outlined text-2xl md:text-3xl">close</span>
            </button>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-16 lg:p-24">
                <header className="mb-16 md:mb-24">
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                        <span className="px-4 py-1.5 rounded-full bg-primary/10 text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.2em] font-label">GBP Optimization</span>
                        <span className="px-4 py-1.5 rounded-full bg-accent-green/10 text-[10px] md:text-xs font-black text-accent-green uppercase tracking-[0.2em] font-label">Google Ads</span>
                        <span className="px-4 py-1.5 rounded-full bg-slate-200 text-[10px] md:text-xs font-black text-slate-600 uppercase tracking-[0.2em] font-label">Beauty Clinic</span>
                        <span className="px-4 py-1.5 rounded-full bg-slate-200 text-[10px] md:text-xs font-black text-slate-600 uppercase tracking-[0.2em] font-label">UK Market</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-text-heading poly-sans-feel leading-[1.1] mb-8">Anita Skin</h2>
                    <p className="text-lg md:text-2xl text-text-body/70 max-w-4xl leading-relaxed">
                        Built a conversion-focused customer acquisition system for this UK-based beauty clinic using strategic Google Ads campaigns and Google Business Profile optimization.
                    </p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-32">
                    <div className="stat-card-premium p-8 md:p-10 rounded-3xl">
                        <div className="text-4xl md:text-5xl font-black text-primary mb-2">4.6x</div>
                        <div className="text-[10px] md:text-xs font-black text-text-body/50 uppercase tracking-widest leading-relaxed">Appointment Inquiry Growth</div>
                    </div>
                    <div className="stat-card-premium p-8 md:p-10 rounded-3xl">
                        <div className="text-4xl md:text-5xl font-black text-primary mb-2">58%</div>
                        <div className="text-[10px] md:text-xs font-black text-text-body/50 uppercase tracking-widest leading-relaxed">Lower Cost Per Consultation</div>
                    </div>
                    <div className="stat-card-premium p-8 md:p-10 rounded-3xl">
                        <div className="text-4xl md:text-5xl font-black text-primary mb-2">230%</div>
                        <div className="text-[10px] md:text-xs font-black text-text-body/50 uppercase tracking-widest leading-relaxed">Google Maps Profile Engagement</div>
                    </div>
                </section>

                <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
                    <div className="lg:col-span-7 space-y-20 md:space-y-32">
                        <section>
                            <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                                <span className="h-px w-8 bg-primary"></span> 01 / Overview
                            </h2>
                            <div className="prose prose-lg max-w-none text-text-body/80 space-y-6 text-base md:text-lg">
                                <p>Anita Skin is a UK-based beauty and skin clinic providing professional skincare, aesthetic, and cosmetic treatment services.</p>
                                <p>The beauty and cosmetic treatment industry is highly competitive and strongly influenced by reviews, visibility, and customer trust.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                                <span className="h-px w-8 bg-primary"></span> 02 / Critical Blockers
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                                <div className="p-6 md:p-8 rounded-2xl border-2 border-slate-200/60 bg-white">
                                    <span className="material-symbols-outlined text-amber-500 mb-4">event_busy</span>
                                    <p className="text-sm font-black text-text-heading uppercase tracking-widest mb-2">Inconsistent Leads</p>
                                    <p className="text-xs font-medium text-text-body/60 leading-relaxed">Inconsistent lead generation and poor Google Maps engagement in local beauty searches.</p>
                                </div>
                                <div className="p-6 md:p-8 rounded-2xl border-2 border-slate-200/60 bg-white">
                                    <span className="material-symbols-outlined text-amber-500 mb-4">trending_up</span>
                                    <p className="text-sm font-black text-text-heading uppercase tracking-widest mb-2">Rising Costs</p>
                                    <p className="text-xs font-medium text-text-body/60 leading-relaxed">Rising ad costs and weak profile authority leading to inconsistent conversion rates.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                                <span className="h-px w-8 bg-primary"></span> 03 / Engineering Implementation
                            </h2>
                            <div className="space-y-6">
                                <div className="system-module-card p-8 md:p-10 rounded-3xl shadow-sm">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-black text-text-heading uppercase tracking-tight">GBP Growth Optimization</h3>
                                        <span className="px-3 py-1 rounded-lg bg-primary/10 text-[10px] font-bold text-primary uppercase">Core System</span>
                                    </div>
                                    <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Maps Visibility Optimization</li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Service Category Optimization</li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Review Signal Enhancement</li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Local Authority Improvements</li>
                                    </ul>
                                </div>
                                <div className="system-module-card p-8 md:p-10 rounded-3xl shadow-sm">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-black text-text-heading uppercase tracking-tight">Performance Google Ads</h3>
                                        <span className="px-3 py-1 rounded-lg bg-accent-green/10 text-[10px] font-bold text-accent-green uppercase">Activation</span>
                                    </div>
                                    <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> High-Intent Beauty Search</li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Appointment Tracking</li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Audience Intent Targeting</li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-text-body/80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Call Conversion Optimization</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-5 space-y-16">
                        <div className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm sticky top-10">
                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10 flex items-center gap-3">
                                <span className="material-symbols-outlined text-sm">monitoring</span> Lead Growth
                            </h3>
                            <div className="relative h-64 w-full flex items-end gap-2 mb-10 px-4">
                                <div className="flex-1 bg-primary/10 rounded-t-xl" style={{height: "20%"}}></div>
                                <div className="flex-1 bg-primary/30 rounded-t-xl" style={{height: "45%"}}></div>
                                <div className="flex-1 bg-primary/60 rounded-t-xl" style={{height: "75%"}}></div>
                                <div className="flex-1 bg-primary rounded-t-xl" style={{height: "100%"}}></div>
                                <div className="absolute top-0 right-0 p-4 bg-primary text-white rounded-2xl shadow-xl">
                                    <div className="text-xs font-black uppercase tracking-widest">Growth</div>
                                    <div className="text-2xl font-black">4.6x</div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h4 className="text-sm font-black text-text-heading uppercase tracking-widest mb-4">Growth Outcomes</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">verified</span>
                                        <span className="text-sm font-bold text-text-body/70">4.6x Growth in Appointment Inquiries</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">verified</span>
                                        <span className="text-sm font-bold text-text-body/70">58% Lower Cost Per Consultation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">verified</span>
                                        <span className="text-sm font-bold text-text-body/70">230% Increase in Profile Engagement</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="mt-32 pt-20 border-t border-slate-200 text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-text-heading mb-6 tracking-tight">Ready To Build Your Growth System?</h2>
                    <p className="text-lg text-text-body/60 mb-12">Discuss your visibility goals, customer acquisition strategy, and local growth opportunities with JR Growth.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                        <a href="https://wa.me/917229089082" className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                            <span className="material-symbols-outlined">chat</span> WhatsApp Consultation
                        </a>
                        <a href="mailto:jatin@jrgrowth.tech" className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-primary text-primary rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-primary/5 transition-all">
                            <span className="material-symbols-outlined">mail</span> Email Strategy Discussion
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    </div>


    



    </>
  );
}
