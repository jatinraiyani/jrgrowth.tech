'use client';

import React from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Tag, 
  MoreVertical,
  Edit,
  Trash,
  Clock,
  Eye
} from 'lucide-react';
import { cn } from '@/lib/utils';

const blogs = [
  { 
    id: 1, 
    title: 'How AI is Disrupting Local SEO in 2026', 
    author: 'Jatin Raiyani', 
    category: 'AI SEO', 
    date: 'May 12, 2026', 
    status: 'Published',
    views: '1.2k'
  },
  { 
    id: 2, 
    title: 'The Blueprint for 300% Google Maps Growth', 
    author: 'Jatin Raiyani', 
    category: 'GBP Optimization', 
    date: 'May 10, 2026', 
    status: 'Scheduled',
    views: '840'
  },
  { 
    id: 3, 
    title: 'Scaling Local Services with Performance Max', 
    author: 'Jatin Raiyani', 
    category: 'Google Ads', 
    date: 'May 05, 2026', 
    status: 'Published',
    views: '2.5k'
  },
];

export default function BlogsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-primary-dark">Insights & Content</h1>
          <p className="mt-1 text-slate-500 font-medium">Engineer high-authority content that captures search intent and builds trust.</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
          <Plus size={18} />
          Write New Article
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid gap-6 sm:grid-cols-3">
         <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Total Published</p>
            <h4 className="text-2xl font-black text-primary-dark">42 Articles</h4>
         </div>
         <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Monthly Traffic</p>
            <h4 className="text-2xl font-black text-primary-dark">12.5k Views</h4>
         </div>
         <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Drafts / Scheduled</p>
            <h4 className="text-2xl font-black text-primary-dark">8 Items</h4>
         </div>
      </div>

      {/* Content List */}
      <div className="rounded-[2.5rem] bg-white shadow-sm border border-slate-100 overflow-hidden p-4">
        <div className="space-y-2">
          {blogs.map((blog) => (
            <div key={blog.id} className="group flex flex-col lg:flex-row lg:items-center justify-between p-6 rounded-[2rem] border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-all cursor-pointer">
              <div className="flex items-start lg:items-center gap-6">
                <div className="h-16 w-16 rounded-2xl bg-slate-100 overflow-hidden shrink-0 border border-slate-200">
                   <img src={`https://picsum.photos/seed/${blog.id + 20}/150/150`} alt="Thumbnail" />
                </div>
                <div>
                   <h3 className="text-lg font-black text-primary-dark group-hover:text-primary transition-colors leading-tight">{blog.title}</h3>
                   <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                        <User size={14} />
                        {blog.author}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                        <Calendar size={14} />
                        {blog.date}
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-2 py-0.5 rounded">
                        <Tag size={10} />
                        {blog.category}
                      </div>
                   </div>
                </div>
              </div>

              <div className="flex items-center gap-8 mt-6 lg:mt-0 pl-22 lg:pl-0">
                 <div className="text-center">
                    <p className="text-xs font-black text-primary-dark">{blog.views}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Views</p>
                 </div>
                 <div className="hidden sm:block">
                    <span className={cn(
                      "inline-flex items-center rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest border",
                      blog.status === 'Published' 
                        ? "bg-emerald-50 text-emerald-600 border-emerald-100" 
                        : "bg-blue-50 text-blue-600 border-blue-100"
                    )}>
                      {blog.status}
                    </span>
                 </div>
                 <div className="flex items-center gap-2">
                    <button className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-primary/10 hover:text-primary transition-all">
                       <Edit size={16} />
                    </button>
                    <button className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all">
                       <Trash size={16} />
                    </button>
                 </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-4 py-4 text-sm font-bold text-slate-400 hover:text-primary hover:bg-slate-50 transition-all rounded-2xl border-2 border-dashed border-slate-100">
           Load More Content
        </button>
      </div>
    </div>
  );
}
