'use client';

import React from 'react';
import { TrendingUp, Lock, Mail, ArrowRight, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAdminStore } from '@/lib/store';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = React.useState('jatin@jrgrowth.tech');
  const [password, setPassword] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simulated login for now
    setTimeout(() => {
      if (email === 'jatin@jrgrowth.tech' && password === 'Jatin@jrgrowth_admin_1') {
        localStorage.setItem('isAdminLoggedIn', 'true');
        router.push('/dashboard');
      } else {
        setError('Invalid credentials. Please try again.');
        setIsSubmitting(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#EEEEEE] flex items-center justify-center p-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-2xl shadow-primary/30 mb-6 transform hover:rotate-12 transition-transform duration-500">
            <TrendingUp size={32} />
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-primary-dark">JR GROWTH</h1>
          <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.3em] mt-2">Master Admin Engine</p>
        </div>

        {/* Login Card */}
        <div className="glass-panel rounded-[2.5rem] p-10 border border-white/50 shadow-2xl shadow-primary/5">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-primary-dark tracking-tight">Access Control</h2>
            <p className="text-slate-500 text-sm font-medium mt-1">Enter your secure credentials to manage the platform.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Admin Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jatin@jrgrowth.tech"
                  className="w-full h-14 rounded-2xl bg-white/50 pl-12 pr-4 text-sm font-bold border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Security Key</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full h-14 rounded-2xl bg-white/50 pl-12 pr-4 text-sm font-bold border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-500 text-xs font-bold p-4 rounded-xl border border-red-100 animate-shake">
                {error}
              </div>
            )}

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 rounded-2xl bg-primary text-white font-black tracking-tight shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all flex items-center justify-center gap-3 disabled:opacity-70 group"
            >
              {isSubmitting ? (
                <Loader2 size={20} className="animate-spin" />
              ) : (
                <>
                  Authenticate System
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-10 text-center">
            <button className="text-xs font-bold text-slate-400 hover:text-primary transition-colors">
              Forgot security access? Contact IT Support
            </button>
          </div>
        </div>

        {/* Footer Info */}
        <p className="mt-8 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest opacity-50">
          Secure End-to-End Encryption • System v4.2.0
        </p>
      </div>
    </div>
  );
}
