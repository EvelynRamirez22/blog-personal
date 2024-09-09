import {createClient} from "@supabase/supabase-js"

// Create a single supabase client for interacting with your database
const supabase = createClient(
    'https://zveyvjmhcmzzweswkgym.supabase.co',
     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2ZXl2am1oY216endlc3drZ3ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MDQ2NjEsImV4cCI6MjA0MTQ4MDY2MX0.2NHwI5yHsUW6iOGUBLRLRu3TShAnWb9a09v7atimL1o'
    );

export default supabase