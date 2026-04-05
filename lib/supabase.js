import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://vliecufqpcpihwtbvuvs.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsaWVjdWZxcGNwaWh3dGJ2dXZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzNTcwODgsImV4cCI6MjA5MDkzMzA4OH0.S2U7QHc3vUbUdVnnigD9pZ0tqDsJqljqdr5bVfI23lk"

export const supabase = createClient(supabaseUrl, supabaseKey)