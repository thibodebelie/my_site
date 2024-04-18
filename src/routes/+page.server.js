import { supabase } from "$lib/supabaseClient";
import { redirect } from "@sveltejs/kit";

export async function load() {
  redirect(302 , '/home')
}

