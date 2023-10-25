/** @format */

import { Database } from '../types/supabase'

export type Tables<T extends keyof Database['public']['Tables']> =
	Database['public']['Tables'][T]['Row'];
export type Enums<T extends keyof Database['public']['Enums']> =
	Database['public']['Enums'][T];

export type Events = Database['public']['Tables']['events']['Row'];
