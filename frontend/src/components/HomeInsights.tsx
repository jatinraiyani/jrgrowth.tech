'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function HomeInsights() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBlogs() {
            const { data } = await supabase
                .from('blogs')
                .select('title, slug, category, featured_image, created_at, meta_description')
                .eq('status', 'published')
                .order('created_at', { ascending: false })
                .limit(3);
            
            if (data) {
                setBlogs(data);
            }
            setLoading(false);
        }
        fetchBlogs();
    }, []);

    if (loading) {
        return <div className="text-center py-20 text-slate-500">Loading insights...</div>;
    }

    if (blogs.length === 0) {
        return (
            <div className="py-12 text-center bg-slate-50 rounded-3xl border border-slate-200 border-dashed max-w-3xl mx-auto">
                <span className="material-symbols-outlined text-4xl text-slate-300 mb-4 block">article</span>
                <p className="text-lg font-bold text-slate-500">More insights will appear soon.</p>
            </div>
        );
    }

    return (
        <div className="grid gap-8 lg:grid-cols-3">
            {blogs.map((blog, index) => (
                <article key={blog.slug} className="group reveal reveal-up active rounded-[2rem] bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all" style={{transitionDelay: `${(index + 1) * 0.1}s`}}>
                    <Link href={`/insights/${blog.slug}`} className="block">
                        <div className="aspect-video overflow-hidden">
                            <img src={blog.featured_image || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary">{blog.category || 'Technology'}</span>
                                <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                                <span className="text-[10px] font-bold text-slate-400">
                                    {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-text-heading mb-4 leading-tight group-hover:text-primary transition-colors">{blog.title}</h3>
                            <p className="text-sm text-text-body/70 mb-6 line-clamp-2">{blog.meta_description || 'Click to read more about this insight.'}</p>
                            <span className="text-xs font-black text-primary uppercase tracking-widest flex items-center gap-2">Read Insight <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
                        </div>
                    </Link>
                </article>
            ))}
        </div>
    );
}
