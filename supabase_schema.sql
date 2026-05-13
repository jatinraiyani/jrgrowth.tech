-- JR Growth Supabase Schema

-- 1. Admins Table (For extra profile info if needed, Auth is handled by Supabase Auth)
CREATE TABLE admins (
  id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. SEO Pages Table
CREATE TABLE seo_pages (
  id BIGSERIAL PRIMARY KEY,
  page_name TEXT NOT NULL UNIQUE, -- e.g., 'home', 'ai-seo'
  slug TEXT NOT NULL UNIQUE,
  title TEXT,
  meta_description TEXT,
  focus_keyword TEXT,
  canonical_url TEXT,
  og_title TEXT,
  og_description TEXT,
  og_image TEXT,
  twitter_title TEXT,
  twitter_description TEXT,
  twitter_image TEXT,
  schema_markup JSONB,
  robots_settings TEXT DEFAULT 'index, follow',
  is_indexed BOOLEAN DEFAULT TRUE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 3. SEO Sections Table (For specific blocks on pages)
CREATE TABLE seo_sections (
  id BIGSERIAL PRIMARY KEY,
  page_id BIGINT REFERENCES seo_pages(id) ON DELETE CASCADE,
  section_name TEXT NOT NULL,
  structured_data JSONB,
  faq_schema JSONB,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 4. Case Studies Table
CREATE TABLE case_studies (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category TEXT, -- e.g., 'Local SEO', 'Google Ads'
  industry TEXT,
  country TEXT,
  featured_image TEXT,
  short_description TEXT,
  content_rich TEXT, -- HTML or Markdown
  ranking_growth TEXT,
  traffic_growth TEXT,
  lead_growth TEXT,
  maps_visibility TEXT,
  conversion_growth TEXT,
  roi_results TEXT,
  status TEXT DEFAULT 'draft', -- draft, published, archived
  seo_title TEXT,
  seo_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 5. Case Study Images
CREATE TABLE case_study_images (
  id BIGSERIAL PRIMARY KEY,
  case_study_id BIGINT REFERENCES case_studies(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text TEXT
);

-- 6. Reviews Table
CREATE TABLE reviews (
  id BIGSERIAL PRIMARY KEY,
  client_name TEXT NOT NULL,
  client_company TEXT,
  industry TEXT,
  country TEXT,
  service_used TEXT,
  review_text TEXT,
  client_image TEXT,
  company_logo TEXT,
  rating INTEGER DEFAULT 5,
  review_date DATE,
  is_featured BOOLEAN DEFAULT FALSE,
  show_on_home BOOLEAN DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 7. Blog Categories Table
CREATE TABLE blog_categories (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE
);

-- 8. Blogs Table
CREATE TABLE blogs (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category_id BIGINT REFERENCES blog_categories(id),
  author_name TEXT,
  featured_image TEXT,
  banner_image TEXT,
  short_description TEXT,
  content_rich TEXT,
  status TEXT DEFAULT 'draft', -- draft, scheduled, published, archived
  publish_date TIMESTAMP WITH TIME ZONE,
  seo_title TEXT,
  seo_description TEXT,
  focus_keyword TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 9. Media Library
CREATE TABLE media_library (
  id BIGSERIAL PRIMARY KEY,
  file_name TEXT,
  file_url TEXT NOT NULL,
  file_type TEXT,
  file_size BIGINT,
  alt_text TEXT,
  folder TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 10. Website Settings
CREATE TABLE website_settings (
  id BIGSERIAL PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Enable RLS (Row Level Security)
-- Note: You should configure these in the Supabase UI for better control
-- ALTER TABLE admins ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE seo_pages ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
