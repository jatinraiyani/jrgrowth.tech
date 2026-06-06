
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { uploadImage } from '@/lib/uploadImage';
import { Save, ArrowLeft, Image as ImageIcon, Settings, Globe, ChevronDown, CheckCircle2, Loader2 } from 'lucide-react';
import BlogEditor from '@/components/BlogEditor';

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

export default function BlogEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = React.use(params);
  const id = unwrappedParams.id;
  const router = useRouter();
  const isNew = id === 'new';
  
  // Basic Data
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [content, setContent] = useState<any>({});
  const [featuredImage, setFeaturedImage] = useState('');
  const [gallery, setGallery] = useState<string[]>([]);
  const [status, setStatus] = useState('draft');
  
  // SEO Data
  const [focusKeywords, setFocusKeywords] = useState<string[]>([]);
  const [keywordInput, setKeywordInput] = useState('');
  const [seoTitle, setSeoTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [canonicalUrl, setCanonicalUrl] = useState('');
  const [robotsMeta, setRobotsMeta] = useState('index, follow');
  
  // Social SEO
  const [ogTitle, setOgTitle] = useState('');
  const [ogDescription, setOgDescription] = useState('');
  const [twitterTitle, setTwitterTitle] = useState('');
  const [twitterDescription, setTwitterDescription] = useState('');

  const [isSaving, setIsSaving] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [showAdvancedSeo, setShowAdvancedSeo] = useState(false);
  const [isLoading, setIsLoading] = useState(!isNew);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isNew) {
      fetchBlog();
    }
  }, [id]);

  const fetchBlog = async () => {
    const { data, error } = await supabase.from('blogs').select('*').eq('id', id).single();
    if (data) {
      setTitle(data.title || '');
      setSlug(data.slug || '');
      const cats = data.category ? data.category.split(',').map((c: string) => c.trim()).filter(Boolean) : [];
      setSelectedCategories(cats);
      setContent(data.content || {});
      setFeaturedImage(data.featured_image || '');
      setStatus(data.status || 'draft');
      const kws = data.focus_keyword ? data.focus_keyword.split(',').map((k: string) => k.trim()).filter(Boolean) : [];
      setFocusKeywords(kws);
      setSeoTitle(data.seo_title || '');
      setMetaDescription(data.meta_description || '');
      setCanonicalUrl(data.canonical_url || '');
      setRobotsMeta(data.robots_meta || 'index, follow');
      setOgTitle(data.og_title || '');
      setOgDescription(data.og_description || '');
      setTwitterTitle(data.twitter_title || '');
      setTwitterDescription(data.twitter_description || '');
      
      const { data: images } = await supabase.from('blog_images').select('image_url').eq('blog_id', id).order('display_order');
      if (images) {
        setGallery(images.map((img: any) => img.image_url));
      }
    }
    setIsLoading(false);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    
    if (isNew) {
      const newSlug = newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      setSlug(newSlug);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploadingImage(true);
    const url = await uploadImage(file, 'blogs');
    setIsUploadingImage(false);
    if (url) setFeaturedImage(url);
    else alert('Failed to upload image. Ensure the blogs bucket exists and is public.');
  };

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    
    if (gallery.length + files.length > 5) {
      alert('You can only upload a maximum of 5 images.');
      return;
    }

    setIsUploadingImage(true);
    const newUrls: string[] = [];
    for (const file of files) {
      const url = await uploadImage(file, 'blogs');
      if (url) newUrls.push(url);
    }
    setIsUploadingImage(false);
    
    if (newUrls.length) {
      setGallery([...gallery, ...newUrls]);
    } else {
      alert('Failed to upload gallery images.');
    }
  };

  const removeGalleryImage = (index: number) => {
    setGallery(gallery.filter((_, i) => i !== index));
  };

  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const handleKeywordKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const val = keywordInput.trim();
      if (val && !focusKeywords.includes(val)) {
        setFocusKeywords([...focusKeywords, val]);
      }
      setKeywordInput('');
    }
  };

  const removeKeyword = (kw: string) => {
    setFocusKeywords(focusKeywords.filter(k => k !== kw));
  };

  const handlePublish = async (publishStatus: string) => {
    if (!title || !slug) {
      alert('Title and Slug are required!');
      return;
    }

    if (gallery.length > 0 && (gallery.length < 3 || gallery.length > 5)) {
      alert('You must upload between 3 and 5 images in the gallery, or leave it completely empty if not required yet.');
      return;
    }

    setIsSaving(true);
    
    const blogData = {
      title, slug,
      category: selectedCategories.join(', '),
      content, featured_image: featuredImage, status: publishStatus,
      focus_keyword: focusKeywords.join(', '),
      seo_title: seoTitle, meta_description: metaDescription,
      canonical_url: canonicalUrl, robots_meta: robotsMeta,
      og_title: ogTitle, og_description: ogDescription,
      twitter_title: twitterTitle, twitter_description: twitterDescription,
      updated_at: new Date().toISOString(),
    };

    let result;
    let currentBlogId = id;
    
    if (isNew) {
      result = await supabase.from('blogs').insert([blogData]).select().single();
      if (result.data) currentBlogId = result.data.id;
    } else {
      result = await supabase.from('blogs').update(blogData).eq('id', id).select().single();
    }

    if (!result.error && currentBlogId) {
      await supabase.from('blog_images').delete().eq('blog_id', currentBlogId);
      if (gallery.length > 0) {
        const imagesToInsert = gallery.map((url, index) => ({
          blog_id: currentBlogId,
          image_url: url,
          display_order: index
        }));
        await supabase.from('blog_images').insert(imagesToInsert);
      }
    }

    setIsSaving(false);
    
    if (result.error) {
      alert('Error saving blog: ' + result.error.message);
    } else {
      router.push('/blogs');
      router.refresh();
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20">
      <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" className="hidden" />

      {/* Header Actions */}
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-sm sticky top-24 z-20">
        <div className="flex items-center gap-4">
          <Link href="/blogs" className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
            <ArrowLeft className="w-5 h-5 text-slate-500" />
          </Link>
          <div>
            <h1 className="font-black text-slate-900 text-lg">{isNew ? 'Create New Post' : 'Edit Post'}</h1>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{status}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => handlePublish('draft')}
            disabled={isSaving}
            className="px-5 py-2.5 rounded-xl text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors disabled:opacity-50"
          >
            Save Draft
          </button>
          <button 
            onClick={() => handlePublish('published')}
            disabled={isSaving}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-sm shadow-emerald-600/20 disabled:opacity-50"
          >
            {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {isNew ? 'Publish Post' : 'Update Post'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <input 
              type="text" 
              placeholder="Enter post title here..."
              value={title}
              onChange={handleTitleChange}
              className="w-full text-4xl font-black text-slate-900 placeholder:text-slate-300 focus:outline-none bg-transparent"
            />
            <div className="flex items-center gap-2 mt-4 text-sm font-medium text-slate-500">
              <span className="text-slate-400">jrgrowth.tech/insights/</span>
              <input 
                type="text" 
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="flex-1 focus:outline-none focus:text-primary transition-colors bg-transparent"
                placeholder="post-url-slug"
              />
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden h-[600px] flex flex-col">
             <BlogEditor content={content} onChange={setContent} />
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          {/* Post Settings */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
              <Settings className="w-4 h-4 text-primary" /> Post Settings
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Categories</label>
                <div className="flex flex-wrap gap-2 p-3 bg-slate-50 border border-slate-200 rounded-xl min-h-[100px]">
                  {CATEGORIES.map(cat => {
                    const isSelected = selectedCategories.includes(cat);
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => toggleCategory(cat)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                          isSelected
                            ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Featured Image</label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 hover:border-emerald-500 transition-all overflow-hidden relative"
                >
                  {isUploadingImage ? (
                    <Loader2 className="w-8 h-8 text-emerald-500 animate-spin mb-2" />
                  ) : featuredImage ? (
                    <img src={featuredImage} alt="Featured" className="w-full h-auto rounded-lg" />
                  ) : (
                    <>
                      <ImageIcon className="w-8 h-8 text-slate-400 mb-2" />
                      <p className="text-sm font-bold text-slate-600">Click to upload image</p>
                    </>
                  )}
                </div>
              </div>

<div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase">Gallery Images (3-5)</label>
                  <span className={"text-xs font-bold " + ((gallery.length > 0 && gallery.length < 3) || gallery.length > 5 ? "text-red-500" : "text-slate-400")}>
                    {gallery.length}/5
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  {gallery.map((url, idx) => (
                    <div key={idx} className="relative group rounded-lg overflow-hidden border border-slate-200">
                      <img src={url} alt={`Gallery ${idx}`} className="w-full h-24 object-cover" />
                      <button 
                        onClick={() => removeGalleryImage(idx)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Globe className="w-3 h-3 hidden" /> {/* Dummy icon, can use X if available */}
                        <span className="text-[10px] font-bold px-1">X</span>
                      </button>
                    </div>
                  ))}
                  {gallery.length < 5 && (
                    <label className="border-2 border-dashed border-slate-200 rounded-lg h-24 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors">
                      <input type="file" multiple accept="image/*" onChange={handleGalleryUpload} className="hidden" />
                      <ImageIcon className="w-5 h-5 text-slate-400 mb-1" />
                      <span className="text-[10px] font-bold text-slate-500">Add</span>
                    </label>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* SEO Optimization */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-500" /> SEO Optimization
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Focus Keywords</label>
                <div className="flex flex-wrap gap-2 p-2 bg-slate-50 border border-slate-200 rounded-xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500">
                  {focusKeywords.map(kw => (
                    <span key={kw} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200">
                      {kw}
                      <button
                        type="button"
                        onClick={() => removeKeyword(kw)}
                        className="hover:text-blue-900 transition-colors text-[10px] font-black"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  <input 
                    type="text" 
                    value={keywordInput}
                    onChange={(e) => setKeywordInput(e.target.value)}
                    onKeyDown={handleKeywordKeyDown}
                    onBlur={() => {
                      const val = keywordInput.trim();
                      if (val && !focusKeywords.includes(val)) {
                        setFocusKeywords([...focusKeywords, val]);
                        setKeywordInput('');
                      }
                    }}
                    placeholder={focusKeywords.length === 0 ? "e.g. Technical SEO, local seo" : "Add keyword..."}
                    className="flex-1 min-w-[120px] bg-transparent text-sm text-slate-900 focus:outline-none py-1 font-medium" 
                  />
                </div>
                <p className="text-[10px] text-slate-400 mt-1 font-medium">Press Enter or comma to add multiple keywords.</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase">Meta Description</label>
                  <span className={"text-xs font-bold " + (metaDescription.length > 160 ? "text-red-500" : "text-slate-400")}>
                    {metaDescription.length}/160
                  </span>
                </div>
                <textarea 
                  rows={4} 
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-medium resize-none" 
                  placeholder="Write a compelling meta description..." 
                />
              </div>

              {/* Advanced SEO Toggle */}
              <div className="pt-4 border-t border-slate-100">
                <button 
                  onClick={() => setShowAdvancedSeo(!showAdvancedSeo)}
                  className="w-full flex items-center justify-between text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors"
                >
                  Advanced & Social SEO
                  <ChevronDown className={"w-4 h-4 transition-transform " + (showAdvancedSeo ? "rotate-180" : "")} />
                </button>

                {showAdvancedSeo && (
                  <div className="mt-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-2">SEO Title</label>
                      <input 
                        type="text" 
                        value={seoTitle}
                        onChange={(e) => setSeoTitle(e.target.value)}
                        className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-medium" 
                        placeholder="Leave blank to use main title" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Canonical URL</label>
                      <input 
                        type="text" 
                        value={canonicalUrl}
                        onChange={(e) => setCanonicalUrl(e.target.value)}
                        className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-medium" 
                        placeholder="https://..." 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Robots Meta</label>
                      <select 
                        value={robotsMeta}
                        onChange={(e) => setRobotsMeta(e.target.value)}
                        className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-medium"
                      >
                        <option value="index, follow">Index, Follow</option>
                        <option value="noindex, follow">No Index, Follow</option>
                        <option value="index, nofollow">Index, No Follow</option>
                        <option value="noindex, nofollow">No Index, No Follow</option>
                      </select>
                    </div>

                    <div className="pt-4 pb-2">
                      <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-3">Open Graph (Facebook/LinkedIn)</h4>
                      <div className="space-y-3">
                        <input 
                          type="text" 
                          value={ogTitle}
                          onChange={(e) => setOgTitle(e.target.value)}
                          className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-medium" 
                          placeholder="OG Title" 
                        />
                        <textarea 
                          rows={2} 
                          value={ogDescription}
                          onChange={(e) => setOgDescription(e.target.value)}
                          className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-medium resize-none" 
                          placeholder="OG Description" 
                        />
                      </div>
                    </div>

                    <div className="pt-2 pb-2">
                      <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-3">Twitter Cards</h4>
                      <div className="space-y-3">
                        <input 
                          type="text" 
                          value={twitterTitle}
                          onChange={(e) => setTwitterTitle(e.target.value)}
                          className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-medium" 
                          placeholder="Twitter Title" 
                        />
                        <textarea 
                          rows={2} 
                          value={twitterDescription}
                          onChange={(e) => setTwitterDescription(e.target.value)}
                          className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-medium resize-none" 
                          placeholder="Twitter Description" 
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
