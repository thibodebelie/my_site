export async function load({ params , locals: { supabase }}) {
    const { data, error } = await supabase.from("activiteiten").select();
    if (error) {
      console.error(error);
      return { status: 500, error: new Error('Failed to fetch data') };
    }

    const customOrder = ["Mini-Min", "Maxi-Min", "Tussers", "Hoofdleiding"];
    data.sort((a, b) => {
      const indexA = customOrder.indexOf(a.groep);
      const indexB = customOrder.indexOf(b.groep);
      return indexA - indexB;
    });

    return {
      post:data
    };
}
