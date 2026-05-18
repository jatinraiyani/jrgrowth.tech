import React from 'react';
import { supabase } from '@/lib/supabase';
import ShareButtons from '@/components/ShareButtons';
import Link from 'next/link';
import { generateHTML } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';
import LinkExtension from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import ImageExtension from '@tiptap/extension-image';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';

import { Metadata } from 'next';

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const { data: post } = await supabase
        .from('blogs')
        .select('meta_title, meta_description, featured_image')
        .eq('slug', resolvedParams.slug)
        .single();

    if (!post) return { title: 'Not Found' };

    return {
        title: post.meta_title || 'JR Growth Insight',
        description: post.meta_description || '',
        openGraph: {
            title: post.meta_title || 'JR Growth Insight',
            description: post.meta_description || '',
            images: post.featured_image ? [{ url: post.featured_image }] : [],
            type: 'article',
        }
    };
}

function interleaveContentWithImages(htmlContent: string, images: any[]) {
    if (!images || images.length === 0) return htmlContent;

    const regex = /(<\/p>|<\/h2>|<\/h3>|<\/table>)/i;
    const parts = htmlContent.split(regex);
    
    const chunks: string[] = [];
    for (let i = 0; i < parts.length; i += 2) {
        if (i + 1 < parts.length) {
            chunks.push(parts[i] + parts[i + 1]);
        } else {
            chunks.push(parts[i]);
        }
    }

    const validChunks = chunks.filter(c => c.trim().length > 0);

    if (validChunks.length < 3) {
        let appendedImages = images.map((img, idx) => `
            <figure class="my-10 text-center">
                <img src="${img.image_url}" alt="Insight Image ${idx + 1}" class="w-full rounded-2xl border border-slate-200 shadow-sm" />
            </figure>
        `).join('');
        return htmlContent + appendedImages;
    }

    const interval = Math.max(1, Math.floor(validChunks.length / (images.length + 1)));
    
    let finalHtml = '';
    let imageIndex = 0;

    validChunks.forEach((chunk, index) => {
        finalHtml += chunk;
        if ((index + 1) % interval === 0 && imageIndex < images.length) {
            finalHtml += `
                <figure class="my-10 text-center">
                    <img src="${images[imageIndex].image_url}" alt="Article graphic ${imageIndex + 1}" class="w-full rounded-2xl border border-slate-200 shadow-sm" />
                </figure>
            `;
            imageIndex++;
        }
    });

    while (imageIndex < images.length) {
        finalHtml += `
            <figure class="my-10 text-center">
                <img src="${images[imageIndex].image_url}" alt="Article graphic ${imageIndex + 1}" class="w-full rounded-2xl border border-slate-200 shadow-sm" />
            </figure>
        `;
        imageIndex++;
    }

    return finalHtml;
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    
    const { data: post, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', resolvedParams.slug)
        .eq('status', 'published')
        .single();

    if (error || !post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h1 className="text-4xl font-black text-text-heading mb-4 poly-sans-feel">Post Not Found</h1>
                    <p className="text-text-body mb-8">The insight you're looking for doesn't exist or has been removed.</p>
                    <Link href="/insights" className="px-6 py-3 rounded-xl bg-primary text-white font-bold">Back to Insights</Link>
                </div>
            </div>
        );
    }

    const { data: gallery } = await supabase
        .from('blog_images')
        .select('image_url')
        .eq('blog_id', post.id)
        .order('display_order');

    let htmlContent = '';
    if (typeof post.content === 'object' && post.content?.html) {
        htmlContent = post.content.html;
    } else if (typeof post.content === 'object' && post.content?.type === 'doc') {
        try {
            htmlContent = generateHTML(post.content, [
                StarterKit.configure({ heading: { levels: [2, 3, 4] } }),
                Underline,
                TextAlign.configure({ types: ['heading', 'paragraph'] }),
                ImageExtension,
                LinkExtension.configure({ openOnClick: false }),
                Table,
                TableRow,
                TableHeader,
                TableCell
            ]);
        } catch (e) {
            htmlContent = '<p>Error loading rich content.</p>';
        }
    } else if (typeof post.content === 'string') {
        htmlContent = post.content;
    } else {
        htmlContent = '<p>No content available.</p>';
    }

    // Generate Dynamic Table of Contents and inject IDs into HTML headings
    const toc: { id: string, text: string, level: number }[] = [];
    const htmlWithIds = htmlContent.replace(/<h([23])(.*?)>(.*?)<\/h\1>/gi, (match, level, attrs, text) => {
        const rawText = text.replace(/<[^>]*>?/gm, '').trim(); // Remove inner HTML tags for raw text
        const id = rawText.toLowerCase().replace(/[\s\W]+/g, '-');
        if (rawText) {
            toc.push({ id, text: rawText, level: parseInt(level) });
        }
        return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
    });

    const richContentWithImages = interleaveContentWithImages(htmlWithIds, gallery || []);

    const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const readTime = Math.max(1, Math.ceil(htmlContent.replace(/<[^>]*>?/gm, '').split(' ').length / 200));

    // Fetch Other Insights for Keep Reading section
    const { data: otherBlogs } = await supabase
        .from('blogs')
        .select('title, slug, category, featured_image, created_at')
        .eq('status', 'published')
        .neq('id', post.id)
        .order('created_at', { ascending: false })
        .limit(3);

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Header */}
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

            <main>
                {/* 2-Column Hero Area (Matching Theme Colors) */}
                <section className="bg-slate-100 border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
                        {/* Left: Text & Meta */}
                        <div className="flex-1 space-y-6">
                            <div className="flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-wider">
                                <span>Insights</span> <span className="text-slate-300">•</span> <span>{post.category || 'Technology'}</span>
                            </div>
                            
                            <h1 className="text-3xl md:text-5xl lg:text-[54px] font-black text-text-heading leading-[1.1] tracking-tight poly-sans-feel">
                                {post.title}
                            </h1>
                            
                            <p className="text-lg text-text-body max-w-xl">
                                {post.meta_description || 'Discover advanced strategies to supercharge your business growth.'}
                            </p>

                            <div className="flex items-center gap-4 pt-4">
                                <img src="/assets/logo.png" alt="Author" className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover bg-white p-2" />
                                <div>
                                    <div className="font-bold text-text-heading">Jatin Raiyani</div>
                                    <div className="text-sm text-text-body/70 font-medium">{formattedDate} · {readTime} min read</div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Featured Image */}
                        {post.featured_image && (
                            <div className="flex-1 w-full lg:w-auto relative">
                                <div className="absolute inset-0 bg-primary/10 transform translate-x-4 translate-y-4 rounded-3xl"></div>
                                <img src={post.featured_image} alt={post.title} className="relative w-full aspect-[4/3] object-cover rounded-3xl shadow-xl border-4 border-white" />
                            </div>
                        )}
                    </div>
                </section>

                {/* Main Content Layout - 3 Columns */}
                <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12 items-start relative">
                    
                    {/* Left Sidebar (Social Share - sticky) */}
                    <aside className="hidden lg:flex w-16 sticky top-32 flex-col gap-4 text-slate-400">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 rotate-180" style={{ writingMode: 'vertical-rl' }}>Share</div>
                        <div className="w-[1px] h-12 bg-slate-200 mx-auto mb-2"></div>
                        <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-emerald-50 hover:text-primary hover:border-primary/30 transition-colors bg-white">
                            <span className="material-symbols-outlined text-sm">share</span>
                        </button>
                        <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-emerald-50 hover:text-primary hover:border-primary/30 transition-colors bg-white">
                            <span className="material-symbols-outlined text-sm">link</span>
                        </button>
                    </aside>

                    {/* Center Column (The Blog Content) */}
                    <div className="flex-1 max-w-[800px] w-full">
                        <article 
                            className="prose prose-lg md:prose-xl prose-slate max-w-none 
                            prose-headings:font-black prose-headings:text-text-heading prose-headings:poly-sans-feel
                            prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:border-b prose-h2:border-slate-100 prose-h2:pb-4 prose-h2:scroll-mt-32
                            prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:scroll-mt-32
                            prose-p:leading-relaxed prose-p:text-text-body prose-p:mb-6
                            prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-text-heading prose-strong:font-black
                            prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:text-text-body
                            prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6 prose-ol:text-text-body
                            prose-li:mb-2
                            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-emerald-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:text-text-heading prose-blockquote:font-medium prose-blockquote:rounded-r-xl prose-blockquote:not-italic
                            
                            /* Table Styling */
                            prose-table:w-full prose-table:border-collapse prose-table:border prose-table:border-slate-200 prose-table:my-8 prose-table:rounded-xl prose-table:overflow-hidden prose-table:shadow-sm
                            prose-thead:bg-slate-50 prose-thead:border-b prose-thead:border-slate-200
                            prose-th:text-left prose-th:px-6 prose-th:py-4 prose-th:text-text-heading prose-th:font-bold prose-th:uppercase prose-th:text-xs prose-th:tracking-wider
                            prose-td:px-6 prose-td:py-4 prose-td:border-b prose-td:border-slate-100 prose-td:text-text-body prose-td:align-top
                            prose-tr:hover:bg-slate-50/50
                            
                            /* Image Styling */
                            prose-img:rounded-2xl prose-img:border prose-img:border-slate-200 prose-img:shadow-sm"
                            dangerouslySetInnerHTML={{ __html: richContentWithImages }}
                        />
                        
                        {/* Mobile Share Buttons */}
                        <div className="lg:hidden mt-12 pt-8 border-t border-slate-200 flex flex-row items-center gap-4">
                            <span className="font-bold text-slate-500">Share this:</span>
                            <ShareButtons url={"https://jrgrowth.tech/insights/" + resolvedParams.slug} title={post.title} />
                        </div>
                    </div>

                    {/* Right Sidebar (Sticky CTA) */}
                    <aside className="hidden xl:flex flex-col gap-8 w-[320px] sticky top-32">
                        {/* CTA Card using Theme Colors */}
                        <div className="bg-gradient-to-br from-primary to-[#103d2d] rounded-[2rem] p-8 text-white shadow-xl shadow-primary/20">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-emerald-100">trending_up</span>
                            </div>
                            <h3 className="text-3xl font-black mb-4 leading-tight text-white tracking-tight poly-sans-feel">Ready to scale your organic growth?</h3>
                            <p className="text-emerald-50/90 mb-8 font-medium leading-relaxed">Partner with us to build a high-performance, data-driven technical SEO strategy that drives real revenue.</p>
                            <Link href="https://wa.me/917229089082" target="_blank" className="block w-full text-center py-4 bg-white text-text-heading font-black rounded-xl hover:bg-slate-50 hover:scale-[1.02] transition-all shadow-sm uppercase tracking-widest text-sm">
                                Free Audit
                            </Link>
                        </div>
                    </aside>
                </section>
            </main>

            {/* Bottom Section - Keep Reading */}
            <section className="bg-white border-t border-slate-200 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-black text-text-heading mb-10 poly-sans-feel">Keep Reading</h2>
                    
                    {otherBlogs && otherBlogs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {otherBlogs.map(b => (
                                <Link key={b.slug} href={`/insights/${b.slug}`} className="group block">
                                    <div className="aspect-video w-full bg-slate-100 rounded-2xl mb-4 overflow-hidden border border-slate-200 shadow-sm">
                                        <img src={b.featured_image || '/assets/placeholder.jpg'} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">{b.category || 'Insights'}</span>
                                        <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                                        <span className="text-[10px] font-bold text-slate-400">
                                            {new Date(b.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-text-heading group-hover:text-primary transition-colors line-clamp-2 poly-sans-feel">{b.title}</h3>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="py-12 text-center bg-slate-50 rounded-3xl border border-slate-200 border-dashed">
                            <span className="material-symbols-outlined text-4xl text-slate-300 mb-4 block">article</span>
                            <p className="text-lg font-bold text-slate-500">More insights will appear soon.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
