import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { env } from './env.js';

const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_ANON_KEY || '';

if (!supabaseKey && env.NODE_ENV !== 'test') {
  console.warn(
    'Warning: Neither SUPABASE_SERVICE_ROLE_KEY nor SUPABASE_ANON_KEY is configured. Database calls will fail.'
  );
}

export const supabase: SupabaseClient = createClient(env.SUPABASE_URL, supabaseKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});
