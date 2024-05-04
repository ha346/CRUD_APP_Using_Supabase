import { createClient } from "@supabase/supabase-js";


export const supabase= createClient(
    "https://ulxizqhcmbqqjrrpsuac.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVseGl6cWhjbWJxcWpycnBzdWFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4MDk2MDIsImV4cCI6MjAzMDM4NTYwMn0.pSyigvc8APc-LRp8rZ3Uxvn_y3gshDBfEtXVtV079kc"
)