import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://absseuaxujzaatcntyws.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFic3NldWF4dWp6YWF0Y250eXdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwODI4MjEsImV4cCI6MjAxNjY1ODgyMX0.lNPZ_xheBvGcrdzSP2ogBPayYqhwmPylP_NABCOizKY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
