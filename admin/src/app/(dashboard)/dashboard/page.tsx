'use client';

import React from 'react';
import { 
  FileText, 
  Briefcase, 
  Star, 
  Eye, 
  MousePointer2, 
  TrendingUp, 
  Plus, 
  ArrowUpRight 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  { name: 'Total Blogs', value: '24', icon: FileText, change: '+4 this month', color: 'bg-blue-500' },
  { name: 'Case Studies', value: '12', icon: Briefcase, change: '+2 this month', color: 'bg-emerald-500' },
  { name: 'Client Reviews', value: '148', icon: Star, change: '+12 this month', color: 'bg-amber-500' },
  { name: 'SEO Visibility', value: '94%', icon: Eye, change: '+5% growth', color: 'bg-primary' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-primary-dark">Growth Overview</h1>
          <p className="mt-1 text-slate-500 font-medium">Welcome back, Jatin. Here is what is happening with JR Growth today.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-slate-700 shadow-sm border border-slate-200 hover:bg-slate-50 transition-all">
            Export Report
          </button>
          <button className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
            <Plus size={18} />
            Quick Add
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="premium-card rounded-3xl bg-white p-6 shadow-sm border border-slate-100 group">
            <div className="flex items-center justify-between mb-4">
              <div className={cn("rounded-2xl p-3 text-white shadow-lg", stat.color)}>
                <stat.icon size={24} />
              </div>
              <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-black text-emerald-600 uppercase tracking-tight">
                <TrendingUp size={10} />
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.name}</p>
              <h2 className="text-4xl font-black tracking-tighter text-primary-dark mt-1">{stat.value}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Recent Activity */}
        <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-primary-dark tracking-tight">Recent Insights & Case Studies</h3>
            <button className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
              View All <ArrowUpRight size={14} />
            </button>
          </div>
          
          <div className="space-y-6">
             {[1, 2, 3].map((i) => (
               <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-slate-50 hover:border-primary/20 hover:bg-slate-50/50 transition-all cursor-pointer group">
                 <div className="flex items-center gap-4">
                   <div className="h-12 w-12 rounded-xl bg-slate-100 overflow-hidden">
                     <img src={`https://picsum.photos/seed/${i+10}/100/100`} alt="Thumbnail" />
                   </div>
                   <div>
                     <p className="text-sm font-bold text-primary-dark group-hover:text-primary transition-colors">How AI is Disrupting Local SEO in 2026</p>
                     <p className="text-xs text-slate-400 font-medium">Published 2 hours ago • Local SEO</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                       <p className="text-xs font-black text-primary-dark">1.2k Views</p>
                       <p className="text-[10px] font-bold text-emerald-500">+12%</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary">
                       <ArrowUpRight size={16} />
                    </div>
                 </div>
               </div>
             ))}
          </div>
        </div>

        {/* Quick Actions / System Health */}
        <div className="space-y-8">
           <div className="rounded-3xl bg-primary-dark p-8 text-white shadow-xl shadow-primary-dark/20 relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-xl font-black tracking-tight mb-2">Neural Engine Status</h3>
              <p className="text-white/60 text-sm font-medium mb-6">All SEO systems are performing at optimum signal density.</p>
              
              <div className="space-y-4">
                 <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-white/40">
                    <span>Processing Power</span>
                    <span>98%</span>
                 </div>
                 <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[98%] bg-emerald-400"></div>
                 </div>
              </div>
              
              <button className="w-full mt-8 rounded-xl bg-white/10 py-3 text-sm font-bold hover:bg-white/20 transition-all border border-white/10">
                 Run System Audit
              </button>
           </div>

           <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100">
              <h3 className="text-lg font-black text-primary-dark tracking-tight mb-6">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                 <button className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-primary/5 hover:text-primary transition-all group">
                    <Plus size={20} />
                    <span className="text-xs font-bold">New Blog</span>
                 </button>
                 <button className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-primary/5 hover:text-primary transition-all group">
                    <Briefcase size={20} />
                    <span className="text-xs font-bold">New Case</span>
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
