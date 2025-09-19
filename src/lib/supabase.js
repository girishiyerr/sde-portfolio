import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://toktswgyrgvybewyxzoo.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRva3Rzd2d5cmd2eWJld3l4em9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyODk0MjEsImV4cCI6MjA3Mzg2NTQyMX0.HlDshaaYkcRRv6FNploXtdvEFy05Jblb7xJax1OruC4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
