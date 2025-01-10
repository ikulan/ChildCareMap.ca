import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY,
);

// returns top 20 cities with most child care facilities
export const topCitiesQuery = supabase
  .from("city_stats")
  .select(
    `
    childcare_nums,
    ...cities!inner(
      city_name:name
    )
    `,
  )
  .order("childcare_nums", {
    ascending: false,
  })
  .limit(20);
