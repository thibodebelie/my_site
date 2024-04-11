export async function load({ params , locals: { supabase }}) {
    const { data, error } = await supabase.from("activiteiten").select().eq('groep','Hoofdleiding');
  
    if (error) {
      console.error(error);
      return { status: 500, error: new Error('Failed to fetch data') };
    }

    return {
      post:data
    };
}