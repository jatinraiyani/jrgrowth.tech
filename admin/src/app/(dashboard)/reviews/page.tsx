'use client';

import React from 'react';
import { 
  Star, 
  MessageSquare, 
  User, 
  Building2, 
  MapPin, 
  Plus, 
  Search, 
  Eye, 
  Edit, 
  Trash,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';

const reviews = [
  { 
    id: 1, 
    client: 'Rahul Sharma', 
    company: 'Shreeji Precast', 
    service: 'Local SEO', 
    rating: 5, 
    status: 'Featured',
    text: 'JR Growth transformed our local presence. We are now ranking #1 for all our major keywords in the region.'
  },
  { 
    id: 2, 
    client: 'Sarah Jenkins', 
    company: 'Mega Retail', 
    service: 'GBP Optimization', 
    rating: 5, 
    status: 'Active',
    text: 'The Google Business Profile growth was immediate. Calls have increased by 40% in just two months.'
  },
  { 
    id: 3, 
    client: 'David Miller', 
    company: 'Grand Horeca', 
    service: 'Google Ads', 
    rating: 4, 
    status: 'Active',
    text: 'Professional approach to performance marketing. The ROI we are seeing is better than any previous agency.'
  },
];

export default function ReviewsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-primary-dark">Social Proof Engine</h1>
          <p className="mt-1 text-slate-500 font-medium">Manage client testimonials and leverage the power of reputation.</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
          <Plus size={18} />
          Add Client Review
        </button>
      </div>

      {/* Grid of Reviews */}
      <div className="grid gap-6 lg:grid-cols-3">
         {reviews.map((review) => (
           <div key={review.id} className="premium-card rounded-[2rem] bg-white p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                 <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1">
                       {[...Array(5)].map((_, i) => (
                         <Star key={i} size={14} className={cn(i < review.rating ? "text-amber-400 fill-amber-400" : "text-slate-200")} />
                       ))}
                    </div>
                    <span className={cn(
                      "text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded",
                      review.status === 'Featured' ? "bg-primary/10 text-primary" : "bg-slate-100 text-slate-400"
                    )}>
                      {review.status}
                    </span>
                 </div>
                 
                 <div className="relative mb-8">
                    <MessageSquare size={40} className="absolute -left-2 -top-2 text-primary/5 -z-10" />
                    <p className="text-sm font-medium text-slate-600 leading-relaxed italic">"{review.text}"</p>
                 </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                 <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-sm">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.client}`} alt={review.client} />
                    </div>
                    <div>
                       <p className="text-xs font-black text-primary-dark">{review.client}</p>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{review.company}</p>
                    </div>
                 </div>
                 <div className="flex gap-2">
                    <button className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary/10 hover:text-primary transition-all">
                       <Edit size={14} />
                    </button>
                    <button className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all">
                       <Trash size={14} />
                    </button>
                 </div>
              </div>
           </div>
         ))}
      </div>

      {/* Featured Controls */}
      <div className="rounded-[2.5rem] bg-primary-dark p-10 text-white shadow-xl shadow-primary-dark/20 flex flex-col md:flex-row items-center justify-between gap-8">
         <div className="max-w-md">
            <h3 className="text-xl font-black tracking-tight mb-2">Home Page Visibility</h3>
            <p className="text-white/60 text-sm font-medium">You have selected 3 reviews to be featured on the homepage. These are automatically optimized for conversion.</p>
         </div>
         <button className="whitespace-nowrap px-8 py-3 rounded-xl bg-white text-primary-dark font-black text-sm hover:bg-white/90 transition-all">
            Manage Featured Order
         </button>
      </div>
    </div>
  );
}
