'use client';

import React from 'react';
import { Bell, Search, User, LogOut, Menu } from 'lucide-react';
import { useAdminStore } from '@/lib/store';
import { cn } from '@/lib/utils';

export function Header() {
  const { toggleSidebar, user } = useAdminStore();

  return (
    <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between border-b border-slate-200 bg-white/80 px-8 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="lg:hidden rounded-lg p-2 hover:bg-slate-100"
        >
          <Menu size={20} />
        </button>
        
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search systems, SEO data..."
            className="h-11 w-80 rounded-xl bg-slate-100 pl-10 pr-4 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all border border-transparent focus:border-primary/30"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button className="relative rounded-xl p-2.5 hover:bg-slate-100 transition-colors">
          <Bell size={20} className="text-slate-600" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
          <div className="hidden lg:block text-right">
            <p className="text-sm font-bold text-primary-dark">Jatin Raiyani</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Master Admin</p>
          </div>
          <div className="h-10 w-10 overflow-hidden rounded-xl bg-primary/10 border-2 border-white shadow-sm ring-1 ring-slate-100 transition-transform hover:scale-105 cursor-pointer">
             <img 
               src="https://api.dicebear.com/7.x/avataaars/svg?seed=jatin" 
               alt="Admin Profile" 
               className="h-full w-full object-cover"
             />
          </div>
        </div>
      </div>
    </header>
  );
}
