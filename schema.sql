-- ==========================================
-- JR Growth - Master Database Schema
-- ==========================================
-- This file contains all queries required to set up the JR Growth database.

-- ==========================================
-- 1. Blogs Table
-- ==========================================
CREATE TABLE blogs (
    id BIGSERIAL PRIMARY KEY,
    
    -- Basic Data
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    short_description TEXT,
    category TEXT,
    tags TEXT[],
    status TEXT DEFAULT 'draft', -- draft, scheduled, published, archived
    is_featured BOOLEAN DEFAULT FALSE,
    reading_time TEXT,
    views_count BIGINT DEFAULT 0,
    
    -- Main Content (Structured JSON from Tiptap Editor)
    content JSONB,
    
    -- Main Images
    featured_image TEXT,
    banner_image TEXT,
    
    -- Author Data
    author_name TEXT,
    author_role TEXT,
    author_avatar TEXT,
    
    -- SEO Data
    seo_title TEXT,
    meta_description TEXT,
    focus_keyword TEXT,
    canonical_url TEXT,
    robots_meta TEXT DEFAULT 'index, follow',
    
    -- Open Graph Data
    og_title TEXT,
    og_description TEXT,
    og_image TEXT,
    
    -- Twitter SEO
    twitter_title TEXT,
    twitter_description TEXT,
    twitter_image TEXT,
    
    -- Advanced SEO (Structured JSON)
    schema_markup JSONB,
    faq_schema JSONB,
    breadcrumb_schema JSONB,
    
    -- Publishing Data
    published_at TIMESTAMP WITH TIME ZONE,
    scheduled_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ==========================================
-- 2. Blog Images (Gallery Table)
-- ==========================================
CREATE TABLE blog_images (
    id BIGSERIAL PRIMARY KEY,
    blog_id BIGINT REFERENCES blogs(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    alt_text TEXT,
    image_title TEXT,
    image_caption TEXT,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ==========================================
-- 3. Row Level Security (RLS) Policies
-- ==========================================

-- Enable RLS on tables
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_images ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published blogs
CREATE POLICY "Public can view published blogs" ON blogs
    FOR SELECT USING (status = 'published');

-- Allow public read access to blog images
CREATE POLICY "Public can view blog images" ON blog_images
    FOR SELECT USING (true);

-- Allow authenticated users (Admins) to do everything
CREATE POLICY "Admins can insert blogs" ON blogs FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admins can update blogs" ON blogs FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admins can delete blogs" ON blogs FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can insert blog images" ON blog_images FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admins can update blog images" ON blog_images FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admins can delete blog images" ON blog_images FOR DELETE USING (auth.role() = 'authenticated');

-- ==========================================
-- 4. Storage Bucket Instructions
-- ==========================================
-- Note: Ensure Supabase Storage buckets are created manually or via dashboard:
-- /blogs/featured/
-- /blogs/banners/
-- /blogs/gallery/
-- /blogs/authors/
