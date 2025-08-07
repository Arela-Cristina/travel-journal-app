import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dgpppproinsqlvzfuuyq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRncHBwcHJvaW5zcWx2emZ1dXlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1NzE1OTMsImV4cCI6MjA3MDE0NzU5M30.f2NSB6_fQz9GVtakFOopiSD4Lor81skg0HBxIUNGuVY'

export const supabase = createClient(supabaseUrl, supabaseKey)