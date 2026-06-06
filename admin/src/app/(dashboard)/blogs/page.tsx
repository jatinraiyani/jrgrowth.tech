
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Edit2, Trash2, CheckCircle2, Search, Filter, Plus, Clock, Globe, Archive, Loader2 } from 'lucide-react';

const CATEGORIES = [
  'Local SEO',
  'Technical SEO',
  'Off Page SEO',
  'On Page SEO',
  'Performance Ads',
  'GBP',
  'Landing Page',
  'AI SEO'
];

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('blogs')
      .select('id, title, slug, category, status, is_featured, views_count, created_at')
      .order('created_at', { ascending: false });
    
    if (!error && data) {
      setBlogs(data);
    }
    setLoading(false);
  };

  const deleteBlog = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;
    await supabase.from('blogs').delete().eq('id', id);
    fetchBlogs();
  };

  const filteredBlogs = blogs.filter(b => {
    const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase()) || (b.slug && b.slug.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = categoryFilter 
      ? b.category?.split(',').map((c: string) => c.trim()).includes(categoryFilter) 
      : true;
    const matchesStatus = statusFilter ? b.status === statusFilter : true;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'published': return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
      case 'draft': return <Clock className="w-4 h-4 text-amber-500" />;
      case 'scheduled': return <Clock className="w-4 h-4 text-blue-500" />;
      case 'archived': return <Archive className="w-4 h-4 text-slate-400" />;
      default: return <Clock className="w-4 h-4 text-slate-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'published': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'draft': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'scheduled': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'archived': return 'bg-slate-100 text-slate-700 border-slate-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Blog CMS</h1>
          <p className="text-sm text-slate-500 mt-1 font-medium">Manage your dynamic SEO content and publications.</p>
        </div>
        <Link 
          href="/blogs/new" 
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-emerald-600/20 active:scale-95"
        >
          <Plus className="w-4 h-4" />
          Create New Blog
        </Link>
      </div>

      {/* Filters and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search blogs by title or keyword..." 
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400 font-medium"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <select 
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="flex-1 md:flex-none px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          >
            <option value="">All Categories</option>
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="flex-1 md:flex-none px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          >
            <option value="">All Statuses</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>

      {/* Blogs Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-200">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Title & Slug</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr><td colSpan={5} className="px-6 py-12 text-center"><Loader2 className="w-8 h-8 animate-spin text-emerald-500 mx-auto" /></td></tr>
              ) : filteredBlogs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center text-slate-400">
                      <Globe className="w-12 h-12 mb-4 opacity-20" />
                      <p className="text-lg font-bold text-slate-600">No blogs found.</p>
                      <Link 
                        href="/blogs/new" 
                        className="mt-6 inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
                      >
                        <Plus className="w-4 h-4" /> Create Blog
                      </Link>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredBlogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 text-sm">{blog.title}</span>
                        <span className="text-xs text-slate-400 font-medium mt-0.5">/{blog.slug}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {blog.category ? (
                          blog.category.split(',').map((c: string) => c.trim()).filter(Boolean).map((cat: string) => (
                            <span key={cat} className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">
                              {cat}
                            </span>
                          ))
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-bold bg-slate-100 text-slate-400">
                            Uncategorized
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold border " + getStatusBadge(blog.status)}>
                        {getStatusIcon(blog.status)}
                        <span className="capitalize">{blog.status}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 font-medium">
                      {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link 
                          href={"/blogs/" + blog.id}
                          className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                          title="Edit Blog"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Link>
                        <button 
                          onClick={() => deleteBlog(blog.id)}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete Blog"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
