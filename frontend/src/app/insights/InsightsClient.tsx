
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function InsightsClient({ initialBlogs }: { initialBlogs: any[] }) {
    const [blogs, setBlogs] = useState<any[]>(initialBlogs);
    const [loading, setLoading] = useState(initialBlogs.length === 0);
    const [visibleCount, setVisibleCount] = useState(12);

    useEffect(() => {
        if (initialBlogs.length === 0) {
            supabase
                .from('blogs')
                .select('*')
                .eq('status', 'published')
                .order('created_at', { ascending: false })
                .then(({ data }) => {
                    if (data) setBlogs(data);
                    setLoading(false);
                });
        }
    }, [initialBlogs.length]);

    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 12, blogs.length));
    };


    return (
        <div className="min-h-screen bg-white">
            {/* Header placeholder */}
            <header className="sticky top-0 z-50 w-full border-b border-outline-variant/30 bg-white/80 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-2">
                        <Link href="/"><img alt="JR GROWTH" className="w-auto object-contain h-14" src="/assets/logo.png" /></Link>
                    </div>
                    <nav className="hidden lg:flex items-center gap-8">
                        <Link className="text-sm font-semibold text-text-body hover:text-primary transition-colors" href="/">Home</Link>
                        <Link className="text-sm font-semibold text-primary transition-colors" href="/insights">Insights</Link>
                    </nav>
                    <a href="https://wa.me/917229089082" className="hidden lg:flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-black text-white uppercase tracking-widest transition-all hover:bg-primary-dark hover:shadow-lg active:scale-95">
                        <span className="material-symbols-outlined text-sm">rocket_launch</span> Free Audit
                    </a>
                </div>
            </header>

            <main className="py-20 md:py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-20 text-center reveal reveal-up active">
                        <h1 className="text-4xl font-extrabold text-text-heading poly-sans-feel lg:text-5xl max-w-4xl mx-auto">
                          Local SEO Insights, Google Maps Strategies & AI SEO Intelligence
                        </h1>
                        <div className="mt-6 text-lg text-text-body/70 max-w-4xl mx-auto space-y-6 text-left">
                          <p>
                            The JR Growth Insights platform shares advanced strategies, technical frameworks, and growth intelligence focused on Local SEO, Google Business Profile optimization, Google Maps rankings, and performance-driven Google Ads systems.
                          </p>
                          <div className="grid md:grid-cols-2 gap-6 text-sm">
                            <div>
                              <p className="font-bold text-text-heading mb-2">Designed for:</p>
                              <ul className="list-disc list-inside space-y-1">
                                <li>Local businesses & Multi-location brands</li>
                                <li>Clinics & Beauty clinics</li>
                                <li>Restaurants & Hospitality</li>
                                <li>Home service companies</li>
                                <li>Real estate firms & Legal businesses</li>
                              </ul>
                            </div>
                            <div>
                              <p className="font-bold text-text-heading mb-2">To improve:</p>
                              <ul className="list-disc list-inside space-y-1">
                                <li>Local visibility & Organic rankings</li>
                                <li>Customer acquisition</li>
                                <li>Google Maps discoverability</li>
                                <li>Advertising performance</li>
                              </ul>
                            </div>
                          </div>
                          <p>
                            Through AI-powered search optimization systems and modern digital growth strategies.
                          </p>
                        </div>
                        <div className="mt-12 h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                    </div>

                    {loading ? (
                        <div className="col-span-3 py-24 text-center">
                            <div className="inline-flex items-center gap-3 text-text-body/60">
                                <span className="material-symbols-outlined text-2xl animate-spin" style={{display:'inline-block'}}>autorenew</span>
                                <span className="font-semibold">Loading insights...</span>
                            </div>
                        </div>
                    ) : null}

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogs.slice(0, visibleCount).map((blog, index) => (
                            <article key={blog.id} className="group rounded-[2rem] bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all reveal reveal-up active" style={{ transitionDelay: `${(index % 3) * 0.1}s` }}>
                                <Link href={`/insights/${blog.slug}`} className="block">
                                    <div className="aspect-video overflow-hidden bg-slate-100">
                                        <img src={blog.featured_image || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-primary">{blog.category || 'Insights'}</span>
                                            <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                                            <span className="text-[10px] font-bold text-slate-400">
                                              {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-text-heading mb-4 leading-tight group-hover:text-primary transition-colors poly-sans-feel">{blog.title}</h3>
                                        <p className="text-sm text-text-body/70 mb-6 line-clamp-2">{blog.meta_description || 'Click to read more about this topic.'}</p>
                                        <span className="text-xs font-black text-primary uppercase tracking-widest flex items-center gap-2">
                                            Read Insight <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </span>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>

                    {!loading && blogs.length === 0 && (
                        <div className="text-center py-20 text-slate-500">
                            No insights published yet. Check back soon!
                        </div>
                    )}

                    {visibleCount < blogs.length && (
                        <div className="mt-16 text-center">
                            <button 
                                onClick={loadMore}
                                className="inline-flex items-center gap-3 rounded-2xl bg-slate-50 border border-slate-200 px-8 py-4 text-xs font-black text-text-heading uppercase tracking-widest transition-all hover:bg-slate-100 hover:scale-105 active:scale-95"
                            >
                                <span className="material-symbols-outlined text-lg">sync</span>
                                Load More Insights
                            </button>
                        </div>
                    )}
                    {/* Core Topics Section */}
                    <div className="mt-24 border-t border-slate-100 pt-16">
                        <div className="text-center mb-12">
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Core Intelligence</span>
                            <h2 className="text-3xl font-extrabold text-text-heading poly-sans-feel mt-2">Key Focus Areas</h2>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <h2 className="text-lg font-bold text-text-heading mb-2 poly-sans-feel">AI Powered Local SEO Strategies For Modern Businesses</h2>
                                <p className="text-sm text-text-body/70">Deep dives into how AI is changing local search and how businesses can adapt.</p>
                            </div>
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <h2 className="text-lg font-bold text-text-heading mb-2 poly-sans-feel">Google Business Profile Optimization Insights</h2>
                                <p className="text-sm text-text-body/70">Actionable tips to optimize your GBP for maximum visibility.</p>
                            </div>
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <h2 className="text-lg font-bold text-text-heading mb-2 poly-sans-feel">Google Ads Performance & Lead Generation Systems</h2>
                                <p className="text-sm text-text-body/70">Maximizing ROI with performance-driven Google Ads campaigns.</p>
                            </div>
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <h2 className="text-lg font-bold text-text-heading mb-2 poly-sans-feel">Technical SEO & Local Visibility Intelligence</h2>
                                <p className="text-sm text-text-body/70">The technical foundation required for local search dominance.</p>
                            </div>
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <h2 className="text-lg font-bold text-text-heading mb-2 poly-sans-feel">Industry Research, Case Studies & Growth Frameworks</h2>
                                <p className="text-sm text-text-body/70">Real-world data and frameworks to scale your business.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-white py-20 border-t border-outline-variant/30">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-12 lg:grid-cols-4">
                        <div className="col-span-1 lg:col-span-1">
                            <div className="flex items-center gap-2 mb-6">
                                <img alt="JR GROWTH" className="w-auto object-contain h-12" src="/assets/logo.png" />
                            </div>
                            <p className="text-sm text-text-body/70 leading-relaxed">JR Growth publishes advanced Local SEO insights, Google Maps optimization strategies, AI SEO frameworks, and performance marketing intelligence for businesses seeking measurable digital visibility growth.</p>
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
                            <h4 className="text-sm font-bold text-text-heading mb-6 uppercase tracking-widest font-label">Systems</h4>
                            <ul className="space-y-4 text-sm text-text-body/70 font-semibold">
                                <li className=""><a className="hover:text-primary transition-colors" href="/#services">AI Powered Local SEO</a></li>
                                <li className=""><a className="hover:text-primary transition-colors" href="/#services">GBP Optimization</a></li>
                                <li className=""><a className="hover:text-primary transition-colors" href="/#services">Performance Google Ads</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-text-heading mb-6 uppercase tracking-widest font-label">Markets</h4>
                            <ul className="space-y-4 text-sm text-text-body/70">
                                <li className=""><a className="hover:text-primary transition-colors" href="#">Healthcare (Global)</a></li>
                                <li className=""><a className="hover:text-primary transition-colors" href="#">Home Services (NA/EMEA)</a></li>
                                <li className=""><a className="hover:text-primary transition-colors" href="#">Hospitality (Global)</a></li>
                                <li className=""><a className="hover:text-primary transition-colors" href="#">Real Estate (MENA/NA)</a></li>
                                <li className=""><a className="hover:text-primary transition-colors" href="#">Wellness (APAC/Global)</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-text-heading mb-6 uppercase tracking-widest font-label">Contact</h4>
                            <ul className="space-y-4 text-sm text-text-body/70">
                                <li className=""><a className="hover:text-primary transition-colors font-semibold" href="mailto:jatin@jrgrowth.tech">jatin@jrgrowth.tech</a></li>
                                <li className=""><a className="hover:text-primary transition-colors font-semibold" href="https://wa.me/917229089082">+91 72290 89082</a></li>
                                <li className="pt-2 text-xs opacity-60">Building local growth since 2018.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-20 border-t border-outline-variant/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-text-body/50">
                        <p className="">© 2024 JR Growth. All technical rights reserved.</p>
                        <div className="flex gap-8">
                            <a className="hover:text-primary transition-colors" href="/privacy-policy">Privacy Policy</a>
                            <a className="hover:text-primary transition-colors" href="/terms-and-conditions">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
