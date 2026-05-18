'use client';

import React from 'react';
import { 
  Edit2, 
  Eye, 
  Settings, 
  Share2, 
  CheckCircle2, 
  AlertCircle,
  Loader2,
  Save
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { getSeoPages, updateSeoPage } from '@/lib/api';

interface SEOEditorProps {
  pageSlug: string;
  title: string;
}

export function SEOEditor({ pageSlug, title }: SEOEditorProps) {
  const [pageData, setPageData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);
  const [saving, setSaving] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('basic');
  const [formData, setFormData] = React.useState({
    title: '',
    meta_description: '',
    focus_keyword: '',
    og_title: '',
    og_description: '',
    og_image: '',
    canonical_url: '',
    is_indexed: true
  });

  const loadPage = async () => {
    setLoading(true);
    try {
      const allPages = await getSeoPages();
      const page = allPages.find((p: any) => p.slug === pageSlug);
      if (page) {
        setPageData(page);
        setFormData({
          title: page.title || '',
          meta_description: page.meta_description || '',
          focus_keyword: page.focus_keyword || '',
          og_title: page.og_title || '',
          og_description: page.og_description || '',
          og_image: page.og_image || '',
          canonical_url: page.canonical_url || '',
          is_indexed: page.is_indexed ?? true
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    loadPage();
  }, [pageSlug]);

  const handleSave = async () => {
    if (!pageData) return;
    setSaving(true);
    try {
      await updateSeoPage(pageData.id, formData);
      alert(`${title} SEO updated successfully!`);
    } catch (error) {
      alert('Failed to update SEO.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center p-20 space-y-4">
      <Loader2 className="animate-spin text-primary" size={40} />
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Loading Editor...</p>
    </div>
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between bg-slate-100 p-1.5 rounded-2xl w-fit">
        {[
          { id: 'basic', name: 'Basic SEO', icon: Edit2 },
          { id: 'social', name: 'Social (OG)', icon: Share2 },
          { id: 'technical', name: 'Technical', icon: Settings }
        ].map((tab) => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
              activeTab === tab.id ? "bg-white text-primary shadow-sm" : "text-slate-500"
            )}
          >
            <tab.icon size={14} />
            {tab.name}
          </button>
        ))}
      </div>

      <div className="rounded-[2.5rem] bg-white p-10 border border-slate-100 shadow-sm">
        <div className="space-y-8">
          {activeTab === 'basic' && (
            <div className="space-y-8">
               <div className="grid gap-8 md:grid-cols-2">
                 <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Meta Title</label>
                   <input 
                     type="text" 
                     value={formData.title}
                     onChange={(e) => setFormData({...formData, title: e.target.value})}
                     className="w-full h-14 rounded-2xl bg-slate-50 px-5 text-sm font-bold border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all"
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Focus Keyword</label>
                   <input 
                     type="text" 
                     value={formData.focus_keyword}
                     onChange={(e) => setFormData({...formData, focus_keyword: e.target.value})}
                     className="w-full h-14 rounded-2xl bg-slate-50 px-5 text-sm font-bold border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all"
                   />
                 </div>
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Meta Description</label>
                 <textarea 
                   rows={4}
                   value={formData.meta_description}
                   onChange={(e) => setFormData({...formData, meta_description: e.target.value})}
                   className="w-full rounded-2xl bg-slate-50 p-6 text-sm font-medium border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all resize-none"
                 />
               </div>
               {/* SERP Preview */}
               <div className="mt-4 p-8 rounded-[2rem] bg-slate-50/50 border border-slate-100 space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                     <Eye size={12} /> Google Search Preview
                  </div>
                  <p className="text-[#1a0dab] text-xl font-medium hover:underline cursor-pointer">{formData.title || 'Untitled'}</p>
                  <p className="text-[#006621] text-sm font-medium">https://jrgrowth.tech{pageSlug === '/' ? '' : pageSlug}</p>
                  <p className="text-[#545454] text-sm leading-relaxed line-clamp-2">{formData.meta_description}</p>
               </div>
            </div>
          )}

          {activeTab === 'social' && (
            <div className="space-y-8">
               <div className="space-y-2">
                 <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">OpenGraph Title</label>
                 <input 
                   type="text" 
                   value={formData.og_title}
                   onChange={(e) => setFormData({...formData, og_title: e.target.value})}
                   className="w-full h-14 rounded-2xl bg-slate-50 px-5 text-sm font-bold border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all"
                 />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">OG Image URL</label>
                 <input 
                   type="text" 
                   value={formData.og_image}
                   onChange={(e) => setFormData({...formData, og_image: e.target.value})}
                   className="w-full h-14 rounded-2xl bg-slate-50 px-5 text-sm font-bold border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all"
                 />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">OG Description</label>
                 <textarea 
                   rows={4}
                   value={formData.og_description}
                   onChange={(e) => setFormData({...formData, og_description: e.target.value})}
                   className="w-full rounded-2xl bg-slate-50 p-6 text-sm font-medium border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all resize-none"
                 />
               </div>
            </div>
          )}

          {activeTab === 'technical' && (
            <div className="space-y-8">
               <div className="flex items-center justify-between p-8 rounded-3xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className={cn("h-10 w-10 rounded-2xl flex items-center justify-center", formData.is_indexed ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600")}>
                      {formData.is_indexed ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                    </div>
                    <div>
                      <p className="text-sm font-black text-primary-dark">Indexing Status</p>
                      <p className="text-xs text-slate-500 font-medium">Should Google show this page?</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setFormData({...formData, is_indexed: !formData.is_indexed})}
                    className={cn("w-14 h-7 rounded-full relative transition-all", formData.is_indexed ? "bg-emerald-500" : "bg-slate-300")}
                  >
                    <div className={cn("absolute top-1 w-5 h-5 rounded-full bg-white transition-all shadow-sm", formData.is_indexed ? "left-8" : "left-1")}></div>
                  </button>
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Canonical URL</label>
                 <input 
                   type="text" 
                   value={formData.canonical_url}
                   onChange={(e) => setFormData({...formData, canonical_url: e.target.value})}
                   className="w-full h-14 rounded-2xl bg-slate-50 px-5 text-sm font-bold border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all"
                 />
               </div>
            </div>
          )}
        </div>

        <div className="mt-12 flex justify-end">
          <button 
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-3 rounded-2xl bg-primary px-12 py-5 text-white font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all disabled:opacity-50"
          >
            {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
            Deploy SEO Parameters
          </button>
        </div>
      </div>
    </div>
  );
}
