'use client';

import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { useAdminStore } from '@/lib/admin/store';

export function Header() {
  const { toggleSidebar } = useAdminStore();
  const [name, setName] = useState('Jatin Raiyani');
  const [profilePic, setProfilePic] = useState('https://api.dicebear.com/7.x/avataaars/svg?seed=jatin');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch('/api/admin/profile')
      .then(res => res.json())
      .then(data => {
        if (data.name) setName(data.name);
        if (data.photo) setProfilePic(data.photo);
      })
      .catch(err => console.error(err));
  }, []);

  const handleSave = async () => {
    try {
      await fetch('/api/admin/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, photo: profilePic }),
      });
    } catch (error) {
      console.error(error);
    }
    setIsEditing(false);
  };

  return (
    <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between border-b border-slate-200 bg-white/80 px-8 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="lg:hidden rounded-lg p-2 hover:bg-slate-100"
        >
          <Menu size={20} />
        </button>
      </div>

      <div className="flex items-center gap-6">
        {/* Profile */}
        <div className="flex items-center gap-3 relative">
          <div className="hidden lg:block text-right">
            <p className="text-sm font-bold text-primary-dark">{name}</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Master Admin</p>
          </div>
          <div 
            onClick={() => setIsEditing(!isEditing)}
            className="h-10 w-10 overflow-hidden rounded-xl bg-primary/10 border-2 border-white shadow-sm ring-1 ring-slate-100 transition-transform hover:scale-105 cursor-pointer"
          >
             <img 
               src={profilePic} 
               alt="Admin Profile" 
               className="h-full w-full object-cover"
             />
          </div>

          {isEditing && (
            <div className="absolute top-14 right-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-50">
              <h4 className="text-sm font-bold text-slate-900 mb-3">Edit Profile</h4>
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase">Name</label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mt-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase">Profile Picture URL</label>
                  <input 
                    type="text" 
                    value={profilePic} 
                    onChange={(e) => setProfilePic(e.target.value)}
                    className="w-full mt-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                  />
                </div>
                <button 
                  onClick={handleSave}
                  className="w-full py-2 bg-emerald-600 text-white rounded-lg text-sm font-bold hover:bg-emerald-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
