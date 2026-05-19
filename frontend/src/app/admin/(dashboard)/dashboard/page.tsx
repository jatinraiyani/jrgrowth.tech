'use client';

import React, { useEffect, useState } from 'react';
import { 
  Zap,
  ArrowRight,
  BookOpen,
  Eye,
  FileText
} from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function DashboardPage() {
  const [stats, setStats] = useState({ totalBlogs: 0, publishedBlogs: 0, totalViews: 0 });

  useEffect(() => {
    async function fetchStats() {
      const { data, error } = await supabase.from('blogs').select('status, views_count');
      if (!error && data) {
        setStats({
          totalBlogs: data.length,
          publishedBlogs: data.filter(b => b.status === 'published').length,
          totalViews: data.reduce((acc, curr) => acc + (curr.views_count || 0), 0)
        });
      }
    }
    fetchStats();
  }, []);

  return (
    <div className="space-y-10">
      {/* Welcome Hero */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-primary-dark p-12 text-white shadow-2xl">
         <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
         <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-accent-green/10 blur-3xl"></div>
         
         <div className="relative z-10 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest backdrop-blur-md">
               <Zap size={14} className="text-yellow-400" />
               Technical Command Center
            </div>
            <h1 className="mb-4 text-5xl font-black tracking-tight leading-tight">
               Welcome to JR Growth <br />
               <span className="text-primary-light">Neural Dashboard</span>
            </h1>
            <p className="text-lg text-white/70 font-medium mb-8">
               Your centralized engine for managing SEO architecture, technical content, and client reputation. 
            </p>
            <Link 
               href="/admin/blogs"
               className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-black text-primary-dark transition-all hover:scale-105 active:scale-95"
            >
               Manage Blogs & Insights
               <ArrowRight size={18} />
            </Link>
         </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-6 md:grid-cols-3">
         <div className="rounded-[2rem] bg-white p-8 border border-slate-100 shadow-sm flex items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-500">
               <FileText size={32} />
            </div>
            <div>
               <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Total Blogs</p>
               <h3 className="text-3xl font-black text-slate-800">{stats.totalBlogs}</h3>
            </div>
         </div>
         <div className="rounded-[2rem] bg-white p-8 border border-slate-100 shadow-sm flex items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500">
               <BookOpen size={32} />
            </div>
            <div>
               <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Published</p>
               <h3 className="text-3xl font-black text-slate-800">{stats.publishedBlogs}</h3>
            </div>
         </div>
         <div className="rounded-[2rem] bg-white p-8 border border-slate-100 shadow-sm flex items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50 text-purple-500">
               <Eye size={32} />
            </div>
            <div>
               <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Total Views</p>
               <h3 className="text-3xl font-black text-slate-800">{stats.totalViews}</h3>
            </div>
         </div>
      </div>
    </div>
  );
}
