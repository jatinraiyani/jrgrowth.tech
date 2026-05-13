'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Search, 
  Briefcase, 
  Star, 
  BookOpen, 
  Image as ImageIcon, 
  Settings, 
  User, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAdminStore } from '@/lib/store';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { name: 'SEO Management', icon: Search, href: '/seo' },
  { name: 'Case Studies', icon: Briefcase, href: '/case-studies' },
  { name: 'Reviews', icon: Star, href: '/reviews' },
  { name: 'Blogs & Insights', icon: BookOpen, href: '/blogs' },
  { name: 'Media Library', icon: ImageIcon, href: '/media' },
  { name: 'Website Settings', icon: Settings, href: '/settings' },
];

export function Sidebar() {
  const pathname = usePathname();
  const { isSidebarOpen, toggleSidebar } = useAdminStore();

  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 z-40 h-screen transition-all duration-300 ease-in-out border-r border-slate-200 bg-sidebar",
        isSidebarOpen ? "w-64" : "w-20"
      )}
    >
      <div className="flex h-full flex-col">
        {/* Logo Section */}
        <div className="flex h-20 items-center justify-between px-6">
          <div className={cn("flex items-center gap-3", !isSidebarOpen && "hidden")}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg">
              <TrendingUp size={24} />
            </div>
            <span className="text-xl font-black tracking-tighter text-primary-dark">JR GROWTH</span>
          </div>
          <button 
            onClick={toggleSidebar}
            className="rounded-lg p-1.5 hover:bg-slate-100 transition-colors"
          >
            {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 px-3 py-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 group",
                  isActive 
                    ? "bg-primary text-white shadow-md shadow-primary/20" 
                    : "text-slate-500 hover:bg-slate-100 hover:text-primary"
                )}
              >
                <item.icon size={20} className={cn("shrink-0", isActive ? "text-white" : "group-hover:scale-110 transition-transform")} />
                <span className={cn("whitespace-nowrap transition-opacity", !isSidebarOpen && "opacity-0 invisible")}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Footer Actions */}
        <div className="border-t border-slate-200 p-4 space-y-2">
          <Link
            href="/profile"
            className="flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-100 transition-all"
          >
            <User size={20} className="shrink-0" />
            <span className={cn(!isSidebarOpen && "hidden")}>Admin Profile</span>
          </Link>
          <button
            className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-sm font-semibold text-red-500 hover:bg-red-50 transition-all"
          >
            <LogOut size={20} className="shrink-0" />
            <span className={cn(!isSidebarOpen && "hidden")}>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
