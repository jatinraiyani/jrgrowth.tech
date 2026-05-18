'use client';
import React, { useState, useEffect } from 'react';
import { Loader2, Save, User, Camera } from 'lucide-react';

export default function SettingsPage() {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/profile')
      .then(res => res.json())
      .then(data => {
        setName(data.name || '');
        setPhoto(data.photo || '');
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage('');

    try {
      const res = await fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, photo }),
      });

      if (res.ok) {
        setMessage('Profile updated successfully!');
      } else {
        setMessage('Failed to update profile.');
      }
    } catch (error) {
      setMessage('An error occurred.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] space-y-4">
        <Loader2 className="animate-spin text-primary" size={48} />
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Loading Settings...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-800 tracking-tight">System Settings</h1>
        <p className="text-slate-500 text-sm mt-1">Manage your admin profile and system preferences.</p>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <User size={24} className="text-primary" />
          Admin Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Photo Preview */}
          <div className="flex items-center gap-6">
            <div className="h-24 w-24 rounded-2xl bg-slate-100 overflow-hidden flex items-center justify-center border-2 border-dashed border-slate-200">
              {photo ? (
                <img src={photo} alt="Avatar" className="h-full w-full object-cover" />
              ) : (
                <Camera size={32} className="text-slate-400" />
              )}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">Profile Photo</p>
              <p className="text-xs text-slate-500 mt-1">Enter a URL for your profile photo.</p>
            </div>
          </div>

          {/* Name Field */}
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Admin Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jatin Raiyani"
              className="w-full h-12 rounded-xl bg-slate-50 pl-4 pr-4 text-sm font-bold border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all"
              required
            />
          </div>

          {/* Photo URL Field */}
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Photo URL</label>
            <input 
              type="text" 
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="https://images.unsplash.com/..."
              className="w-full h-12 rounded-xl bg-slate-50 pl-4 pr-4 text-sm font-bold border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all"
            />
          </div>

          {message && (
            <div className={`text-xs font-bold p-4 rounded-xl border ${message.includes('success') ? 'bg-green-50 text-green-500 border-green-100' : 'bg-red-50 text-red-500 border-red-100'}`}>
              {message}
            </div>
          )}

          <button 
            type="submit"
            disabled={isSaving}
            className="h-12 px-6 rounded-xl bg-primary text-white font-black tracking-tight shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isSaving ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <>
                <Save size={18} />
                Save Changes
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
