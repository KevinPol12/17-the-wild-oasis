import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qdocrvjvfwizasblxqow.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkb2Nydmp2ZndpemFzYmx4cW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2NTM0OTksImV4cCI6MjAzMjIyOTQ5OX0.THhhtaF8WoyWel9zHGdZG6Rk_8zKU-K9BSk5ajTG1dE";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
