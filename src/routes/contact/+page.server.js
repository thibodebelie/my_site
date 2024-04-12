/** @type {import('./$types').PageServerLoad} */
export async function load() {
    async function addData(){
        const { data, error } = await supabase
            .from('contact')
        .insert([
            { Naam: 'naam', Voornaam: 'voornaam', Email: 'email' , Bericht:'bericht' },
        ]).select()
    
    return {};
};

}
  