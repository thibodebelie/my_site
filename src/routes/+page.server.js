import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("gegevens").select();
  return {
    gegevens: data ?? [],
  };
}