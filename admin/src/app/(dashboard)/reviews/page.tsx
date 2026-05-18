'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

export default function PlaceholderPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] space-y-4">
      <Loader2 className="animate-spin text-primary" size={48} />
      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Building Module: Coming Soon</p>
    </div>
  );
}
