import { createClient } from '@supabase/supabase-js'
import { Database } from '../../types/supabase'

const supabase_url = import.meta.env.VITE_APP_SUPABASE_URL as string
const supabase_api_key = import.meta.env.VITE_APP_SUPABASE_API_KEY as string

const supabase = createClient<Database>(
supabase_url, supabase_api_key
)
export default supabase