import { supabase } from './supabase';

// --- SEO Module APIs ---

export async function getSeoPages() {
  const { data, error } = await supabase
    .from('seo_pages')
    .select('*')
    .order('page_name', { ascending: true });
  
  if (error) throw error;
  return data;
}

export async function updateSeoPage(id: number, updates: any) {
  const { data, error } = await supabase
    .from('seo_pages')
    .update({ ...updates, updated_at: new Date() })
    .eq('id', id)
    .select();
  
  if (error) throw error;
  return data;
}
