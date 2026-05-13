'use client';

import React from 'react';
import { 
  Globe, 
  Share2, 
  Settings, 
  CheckCircle2, 
  Save, 
  Eye,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

const pages = [
  { id: 'home', name: 'Homepage', status: 'Optimized' },
  { id: 'ai-seo', name: 'AI SEO Service', status: 'Needs Update' },
  { id: 'gbp', name: 'GBP Service', status: 'Optimized' },
  { id: 'ads', name: 'Google Ads Service', status: 'Optimized' },
];

export default function SEOPage() {
  const [activeTab, setActiveTab] = React.useState('basic');
  const [selectedPage, setSelectedPage] = React.useState(pages[0]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-primary-dark">SEO Architecture</h1>
          <p className="mt-1 text-slate-500 font-medium">Engineer and manage dynamic metadata across the entire platform.</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
          <Save size={18} />
          Save Global Changes
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        {/* Page List Sidebar */}
        <div className="lg:col-span-1 space-y-3">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-4">System Pages</h3>
          {pages.map((page) => (
            <button
              key={page.id}
              onClick={() => setSelectedPage(page)}
              className={cn(
                "w-full flex items-center justify-between p-4 rounded-2xl border transition-all text-left",
                selectedPage.id === page.id 
                  ? "bg-white border-primary shadow-sm" 
                  : "bg-slate-50/50 border-transparent hover:border-slate-200"
              )}
            >
              <div>
                <p className={cn("text-sm font-bold", selectedPage.id === page.id ? "text-primary" : "text-primary-dark")}>
                  {page.name}
                </p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">/{page.id}</p>
              </div>
              <div className={cn(
                "h-2 w-2 rounded-full",
                page.status === 'Optimized' ? "bg-emerald-500" : "bg-amber-500"
              )}></div>
            </button>
          ))}
        </div>

        {/* Editor Area */}
        <div className="lg:col-span-3 space-y-6">
          {/* Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl w-fit">
            {[
              { id: 'basic', name: 'Basic SEO', icon: Globe },
              { id: 'social', name: 'Social Cards', icon: Share2 },
              { id: 'technical', name: 'Technical', icon: Settings },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all",
                  activeTab === tab.id 
                    ? "bg-white text-primary shadow-sm" 
                    : "text-slate-500 hover:text-primary"
                )}
              >
                <tab.icon size={16} />
                {tab.name}
              </button>
            ))}
          </div>

          {/* Form Card */}
          <div className="rounded-[2.5rem] bg-white p-10 shadow-sm border border-slate-100">
             {activeTab === 'basic' && (
               <div className="grid gap-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">SEO Title Tag</label>
                      <input 
                        type="text" 
                        defaultValue="JR Growth | AI-Powered Local SEO & Growth Systems"
                        className="w-full h-14 rounded-2xl bg-slate-50 px-5 text-sm font-bold border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Focus Keyword</label>
                      <input 
                        type="text" 
                        defaultValue="Local SEO Agency"
                        className="w-full h-14 rounded-2xl bg-slate-50 px-5 text-sm font-bold border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Meta Description</label>
                    <textarea 
                      rows={3}
                      className="w-full rounded-2xl bg-slate-50 p-5 text-sm font-medium border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all"
                      defaultValue="Stop burning money on general clicks. We build technical performance systems that turn local search intent into predictable revenue."
                    />
                  </div>

                  {/* SERP Preview */}
                  <div className="mt-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 space-y-3">
                     <div className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                        <Eye size={14} />
                        Google SERP Preview
                     </div>
                     <div className="space-y-1">
                        <p className="text-[#1a0dab] text-xl font-medium hover:underline cursor-pointer">JR Growth | AI-Powered Local SEO & Growth Systems</p>
                        <p className="text-[#006621] text-sm font-medium">https://jrgrowth.tech/</p>
                        <p className="text-[#545454] text-sm leading-relaxed">Stop burning money on general clicks. We build technical performance systems that turn local search intent into predictable revenue.</p>
                     </div>
                  </div>
               </div>
             )}

             {activeTab === 'social' && (
               <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                  <Share2 size={48} className="mb-4 opacity-20" />
                  <p className="font-bold">OG Card Management coming soon</p>
               </div>
             )}

             {activeTab === 'technical' && (
               <div className="space-y-8">
                  <div className="flex items-center justify-between p-6 rounded-2xl bg-slate-50">
                    <div>
                      <p className="text-sm font-bold text-primary-dark">Index this page</p>
                      <p className="text-xs text-slate-500">Allow search engines to show this page in results.</p>
                    </div>
                    <div className="h-6 w-11 bg-primary rounded-full relative cursor-pointer">
                      <div className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Canonical URL</label>
                    <input 
                      type="text" 
                      defaultValue="https://jrgrowth.tech/"
                      className="w-full h-14 rounded-2xl bg-slate-50 px-5 text-sm font-bold border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
