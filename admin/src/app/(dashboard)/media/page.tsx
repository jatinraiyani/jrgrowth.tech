'use client';

import React from 'react';
import { 
  Upload, 
  Search, 
  FolderPlus, 
  MoreVertical, 
  Image as ImageIcon, 
  FileText, 
  Grid, 
  List,
  Trash2,
  Copy,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';

const mediaItems = [
  { id: 1, name: 'hero-3d-green.png', type: 'image/png', size: '1.2 MB', date: 'May 12, 2026' },
  { id: 2, name: 'service-ai-seo.png', type: 'image/png', size: '850 KB', date: 'May 12, 2026' },
  { id: 3, name: 'service-gbp.jpg', type: 'image/jpeg', size: '640 KB', date: 'May 12, 2026' },
  { id: 4, name: 'client-logo-shreeji.svg', type: 'image/svg+xml', size: '12 KB', date: 'May 11, 2026' },
  { id: 5, name: 'blog-cover-ai.webp', type: 'image/webp', size: '420 KB', date: 'May 10, 2026' },
  { id: 6, name: 'case-study-graph.png', type: 'image/png', size: '2.1 MB', date: 'May 09, 2026' },
];

export default function MediaLibraryPage() {
  const [viewMode, setViewMode] = React.useState('grid');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-primary-dark">Visual Assets</h1>
          <p className="mt-1 text-slate-500 font-medium">Centralized neural library for all platform media and branding resources.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm border border-slate-200 hover:bg-slate-50 transition-all">
            <FolderPlus size={18} />
            New Folder
          </button>
          <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
            <Upload size={18} />
            Upload Media
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
         <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
               type="text" 
               placeholder="Search assets by name or tag..."
               className="w-full h-12 rounded-2xl bg-slate-50 pl-12 pr-4 text-sm font-medium border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all"
            />
         </div>
         <div className="flex items-center gap-2 border-l border-slate-100 pl-4">
            <button 
               onClick={() => setViewMode('grid')}
               className={cn("p-2.5 rounded-xl transition-all", viewMode === 'grid' ? "bg-primary text-white" : "text-slate-400 hover:bg-slate-50")}
            >
               <Grid size={20} />
            </button>
            <button 
               onClick={() => setViewMode('list')}
               className={cn("p-2.5 rounded-xl transition-all", viewMode === 'list' ? "bg-primary text-white" : "text-slate-400 hover:bg-slate-50")}
            >
               <List size={20} />
            </button>
         </div>
      </div>

      {/* Media Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
         {mediaItems.map((item) => (
           <div key={item.id} className="premium-card group rounded-3xl bg-white border border-slate-100 shadow-sm overflow-hidden flex flex-col cursor-pointer">
              <div className="aspect-square relative overflow-hidden bg-slate-50 border-b border-slate-100">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <img src={`https://picsum.photos/seed/${item.id + 100}/300/300`} alt={item.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 </div>
                 <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="h-8 w-8 rounded-lg bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-slate-600 hover:text-primary">
                       <MoreVertical size={16} />
                    </button>
                 </div>
              </div>
              <div className="p-4">
                 <p className="text-[11px] font-black text-primary-dark truncate mb-1">{item.name}</p>
                 <div className="flex items-center justify-between">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{item.size}</p>
                    <div className="flex gap-1">
                       <button className="h-6 w-6 rounded-md bg-slate-50 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
                          <Copy size={12} />
                       </button>
                       <button className="h-6 w-6 rounded-md bg-slate-50 flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors">
                          <Trash2 size={12} />
                       </button>
                    </div>
                 </div>
              </div>
           </div>
         ))}
      </div>

      {/* Storage Status */}
      <div className="p-8 rounded-[2.5rem] bg-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-200">
         <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
               <ImageIcon size={24} />
            </div>
            <div>
               <p className="text-sm font-black text-primary-dark tracking-tight">Supabase Edge Storage</p>
               <p className="text-xs text-slate-500 font-medium">84.2 MB of 1 GB used (Free Tier)</p>
            </div>
         </div>
         <div className="w-full md:w-64 h-2 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full w-[8.4%] bg-primary"></div>
         </div>
      </div>
    </div>
  );
}
