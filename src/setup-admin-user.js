// Script to create admin user in Supabase
// Run this in your browser console after setting up Supabase Auth

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://toktswgyrgvybewyxzoo.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRva3Rzd2d5cmd2eWJld3l4em9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyODk0MjEsImV4cCI6MjA3Mzg2NTQyMX0.HlDshaaYkcRRv6FNploXtdvEFy05Jblb7xJax1OruC4'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function createAdminUser() {
  try {
    console.log('Creating admin user...')
    
    const { data, error } = await supabase.auth.signUp({
      email: 'girishiyerr@gmail.com',
      password: 'Yofreak@19',
    })

    if (error) {
      console.error('Error creating user:', error)
      return
    }

    console.log('User created successfully:', data)
    
    if (data.user && !data.user.email_confirmed_at) {
      console.log('Check your email for confirmation link!')
    }
  } catch (err) {
    console.error('Error:', err)
  }
}

// Uncomment the line below to run the script
// createAdminUser()

export { createAdminUser }
