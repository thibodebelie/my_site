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

async function deleteVraag(id) {
      
const { error } = await supabase.from("activiteiten").delete().eq("id", id);
if (error) {
    console.error("Error deleting data:", error);
} else {
    console.log("Data deleted successfully!");
    window.alert("De beantwoorde vraag is met succes verwijderd.")
}
window.location.reload();

}

/** @type {import('./$types').Actions} */
export const actions = {
deleteVraag: async( {locals:{supabase}, request}) =>{
  const formData = await request.formData()
  const id = formData.get("id")
  const { error } = await supabase.from("activiteiten").delete().eq("id", id);
}

};
