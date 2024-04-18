
/** @type {import('./$types').PageLoad} */
export async function load({params , locals : {supabase}}) {
  const {data , error} = await supabase.auth.getUser();
  // console.log("layoutsvelte", data, error)
  return {
      user: data.user,
  }   
}