// supabaseClient.ts
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl: string = process.env.SUPABASE_URL!;
const supabaseKey: string = process.env.SUPABASE_KEY!;

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase 
