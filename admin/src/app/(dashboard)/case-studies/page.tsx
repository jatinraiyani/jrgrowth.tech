'use client';

import React from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  ExternalLink,
  Edit2,
  Trash2,
  Eye,
  TrendingUp,
  MapPin,
  Building2
} from 'lucide-react';
import { cn } from '@/lib/utils';

const caseStudies = [
  { 
    id: 1, 
    title: 'Shreeji Precast', 
    category: 'Local SEO', 
    industry: 'Construction', 
    country: 'India', 
    growth: '+142%', 
    status: 'Published',
    image: 'assets/shreeji-logo.png' 
  },
  { 
    id: 2, 
    title: 'Mega Retail Limited', 
    category: 'E-commerce SEO', 
    industry: 'FMCG', 
    country: 'UK', 
    growth: '+89%', 
    status: 'Published',
    image: 'assets/mega-logo.png' 
  },
  { 
    id: 3, 
    title: 'Grand Horeca', 
    category: 'Lead Gen', 
    industry: 'Packaging', 
    country: 'UK', 
    growth: '+215%', 
    status: 'Draft',
    image: 'assets/grand-logo.png' 
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-primary-dark">Impact Portfolio</h1>
          <p className="mt-1 text-slate-500 font-medium">Manage and showcase the technical growth engineering for your clients.</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
          <Plus size={18} />
          Create Case Study
        </button>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search projects, industries, results..."
            className="w-full h-12 rounded-2xl bg-white border border-slate-200 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-primary/10 transition-all"
          />
        </div>
        <div className="flex gap-2">
           <button className="flex items-center gap-2 rounded-2xl bg-white border border-slate-200 px-4 h-12 text-sm font-bold text-slate-600 hover:bg-slate-50">
             <Filter size={18} />
             Filter
           </button>
           <select className="rounded-2xl bg-white border border-slate-200 px-4 h-12 text-sm font-bold text-slate-600 outline-none">
             <option>All Status</option>
             <option>Published</option>
             <option>Draft</option>
             <option>Archived</option>
           </select>
        </div>
      </div>

      {/* Case Studies Table */}
      <div className="rounded-[2.5rem] bg-white shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-50">
                <th className="px-8 py-6 text-xs font-black text-slate-400 uppercase tracking-widest">Project Details</th>
                <th className="px-8 py-6 text-xs font-black text-slate-400 uppercase tracking-widest">Industry & Market</th>
                <th className="px-8 py-6 text-xs font-black text-slate-400 uppercase tracking-widest">Growth Metric</th>
                <th className="px-8 py-6 text-xs font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-6 text-xs font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {caseStudies.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200 overflow-hidden">
                         <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${item.title}`} alt={item.title} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-black text-primary-dark">{item.title}</p>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-0.5">{item.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                        <Building2 size={12} className="text-slate-400" />
                        {item.industry}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                        <MapPin size={12} className="text-slate-400" />
                        {item.country}
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                       <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                          <TrendingUp size={14} />
                       </div>
                       <span className="text-sm font-black text-emerald-600">{item.growth}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={cn(
                      "inline-flex items-center rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest",
                      item.status === 'Published' 
                        ? "bg-emerald-50 text-emerald-600 border border-emerald-100" 
                        : "bg-amber-50 text-amber-600 border border-amber-100"
                    )}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="h-9 w-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary/10 hover:text-primary transition-all">
                        <Eye size={16} />
                      </button>
                      <button className="h-9 w-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary/10 hover:text-primary transition-all">
                        <Edit2 size={16} />
                      </button>
                      <button className="h-9 w-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="p-8 border-t border-slate-50 flex items-center justify-between">
           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Showing 3 of 12 projects</p>
           <div className="flex gap-2">
              <button className="h-10 px-4 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50" disabled>Previous</button>
              <button className="h-10 px-4 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50">Next</button>
           </div>
        </div>
      </div>
    </div>
  );
}
