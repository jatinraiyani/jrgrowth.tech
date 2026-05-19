import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

let _supabase: SupabaseClient | null = null;

export const supabase: SupabaseClient = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    if (!_supabase) {
      if (!supabaseUrl || !supabaseAnonKey) {
        // During build time, return a no-op client that returns empty data
        const noOp = () => ({
          data: null,
          error: null,
          select: noOp,
          from: () => ({ select: noOp, insert: noOp, update: noOp, delete: noOp, upsert: noOp, eq: noOp, order: noOp, single: noOp }),
          eq: noOp,
          order: noOp,
          single: noOp,
        });
        return prop === 'from' ? noOp().from : noOp;
      }
      _supabase = createClient(supabaseUrl, supabaseAnonKey);
    }
    return (_supabase as any)[prop];
  },
});
