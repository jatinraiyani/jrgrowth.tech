'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from '@/components/admin/Sidebar';
import { Header } from '@/components/admin/Header';
import { useAdminStore } from '@/lib/admin/store';
import { cn } from '@/lib/admin/utils';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isSidebarOpen } = useAdminStore();
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
      router.push('/admin/login');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div 
        className={cn(
          "transition-all duration-300 ease-in-out min-h-screen",
          isSidebarOpen ? "pl-64" : "pl-20"
        )}
      >
        <Header />
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
