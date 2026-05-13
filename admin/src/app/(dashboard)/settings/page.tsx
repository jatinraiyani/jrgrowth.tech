'use client';

import React from 'react';
import { 
  Settings, 
  Smartphone, 
  Mail, 
  MapPin, 
  Globe, 
  Share2, 
  Save,
  Palette,
  Layout,
  MessageSquare
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SettingsPage() {
  const [activeCategory, setActiveCategory] = React.useState('brand');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-primary-dark">Global Configuration</h1>
          <p className="mt-1 text-slate-500 font-medium">Control the core identity and communication infrastructure of the platform.</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
          <Save size={18} />
          Sync All Settings
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        {/* Settings Navigation */}
        <div className="lg:col-span-1 space-y-2">
           {[
             { id: 'brand', name: 'Brand & Identity', icon: Palette },
             { id: 'contact', name: 'Contact & Communication', icon: MessageSquare },
             { id: 'social', name: 'Social Infrastructure', icon: Share2 },
             { id: 'cta', name: 'Global CTA Controls', icon: Layout },
           ].map((cat) => (
             <button
               key={cat.id}
               onClick={() => setActiveCategory(cat.id)}
               className={cn(
                 "w-full flex items-center gap-3 p-4 rounded-2xl border transition-all text-sm font-bold",
                 activeCategory === cat.id 
                   ? "bg-white border-primary text-primary shadow-sm" 
                   : "bg-slate-50/50 border-transparent text-slate-500 hover:border-slate-200"
               )}
             >
               <cat.icon size={18} />
               {cat.name}
             </button>
           ))}
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3 space-y-6">
           {activeCategory === 'brand' && (
             <div className="rounded-[2.5rem] bg-white p-10 shadow-sm border border-slate-100 space-y-10">
                <div className="space-y-6">
                   <h3 className="text-xl font-black text-primary-dark">Visual Identity</h3>
                   <div className="grid gap-8 md:grid-cols-2">
                      <div className="space-y-4">
                         <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Platform Logo</label>
                         <div className="h-40 rounded-3xl bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-3 group cursor-pointer hover:bg-slate-100 transition-all">
                            <Settings size={24} className="text-slate-300 group-hover:rotate-90 transition-transform duration-500" />
                            <p className="text-xs font-bold text-slate-400">Click to upload brand logo</p>
                         </div>
                      </div>
                      <div className="space-y-4">
                         <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Favicon (32x32)</label>
                         <div className="h-40 rounded-3xl bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-3 group cursor-pointer hover:bg-slate-100 transition-all">
                            <Settings size={24} className="text-slate-300 group-hover:rotate-90 transition-transform duration-500" />
                            <p className="text-xs font-bold text-slate-400">Click to upload favicon</p>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="space-y-6">
                   <h3 className="text-xl font-black text-primary-dark">Brand Voice</h3>
                   <div className="space-y-4">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Company Description (Footer)</label>
                      <textarea 
                        rows={3}
                        className="w-full rounded-2xl bg-slate-50 p-5 text-sm font-medium border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all"
                        defaultValue="JR Growth is a premier technical growth agency specializing in AI-driven Local SEO, GBP optimization, and ROI-focused search marketing."
                      />
                   </div>
                </div>
             </div>
           )}

           {activeCategory === 'contact' && (
             <div className="rounded-[2.5rem] bg-white p-10 shadow-sm border border-slate-100 space-y-8">
                <h3 className="text-xl font-black text-primary-dark mb-2">Direct Communication</h3>
                <div className="grid gap-6 md:grid-cols-2">
                   <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                         <Smartphone size={12} /> WhatsApp Business Number
                      </label>
                      <input 
                        type="text" 
                        defaultValue="+91 72290 89082"
                        className="w-full h-14 rounded-2xl bg-slate-50 px-5 text-sm font-bold border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                         <Mail size={12} /> Primary Support Email
                      </label>
                      <input 
                        type="email" 
                        defaultValue="jatin@jrgrowth.tech"
                        className="w-full h-14 rounded-2xl bg-slate-50 px-5 text-sm font-bold border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all"
                      />
                   </div>
                   <div className="space-y-2 md:col-span-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                         <MapPin size={12} /> Headquarters Address
                      </label>
                      <input 
                        type="text" 
                        defaultValue="Gujarat, India"
                        className="w-full h-14 rounded-2xl bg-slate-50 px-5 text-sm font-bold border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all"
                      />
                   </div>
                </div>
             </div>
           )}

           {activeCategory === 'social' && (
             <div className="rounded-[2.5rem] bg-white p-10 shadow-sm border border-slate-100 space-y-8">
                <h3 className="text-xl font-black text-primary-dark mb-2">Social Network Links</h3>
                <div className="grid gap-6">
                   {['LinkedIn', 'Instagram', 'Facebook', 'Google Business'].map((platform) => (
                     <div key={platform} className="flex items-center gap-4">
                        <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                           <Share2 size={20} className="text-slate-400" />
                        </div>
                        <div className="flex-1 space-y-1">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{platform} URL</label>
                           <input 
                              type="text" 
                              placeholder={`https://${platform.toLowerCase()}.com/jrgrowth`}
                              className="w-full h-12 rounded-xl bg-slate-50 px-4 text-sm font-medium border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all"
                           />
                        </div>
                     </div>
                   ))}
                </div>
             </div>
           )}

           {activeCategory === 'cta' && (
             <div className="rounded-[2.5rem] bg-white p-10 shadow-sm border border-slate-100 space-y-8">
                <h3 className="text-xl font-black text-primary-dark mb-2">Global Call to Action Settings</h3>
                <div className="grid gap-6 md:grid-cols-2">
                   <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Primary Button Text</label>
                      <input 
                        type="text" 
                        defaultValue="Book Your Growth Strategy"
                        className="w-full h-14 rounded-2xl bg-slate-50 px-5 text-sm font-bold border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Consultation Link</label>
                      <input 
                        type="text" 
                        defaultValue="https://wa.me/917229089082"
                        className="w-full h-14 rounded-2xl bg-slate-50 px-5 text-sm font-bold border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all"
                      />
                   </div>
                </div>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
