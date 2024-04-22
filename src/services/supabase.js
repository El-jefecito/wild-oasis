import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fnagkgddcwosjkpowwnf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuYWdrZ2RkY3dvc2prcG93d25mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2NTY2MjAsImV4cCI6MjAyOTIzMjYyMH0.DG7SwbYCIj5bJjt3nIJJ9Q8e8NGzUyFeENwe0mQSlBc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
