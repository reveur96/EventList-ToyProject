interface ImportMetaEnv {
  readonly VITE_APP_SUPABASE_URL: string;
  readonly VITE_APP_SUPABASE_API_KEY: string;
  readonly VITE_APP_SUPABASE_ACCESS_TOKEN: string;
  readonly VITE_APP_SUPABASE_PROJECT_PASSWORD: string;
  
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}