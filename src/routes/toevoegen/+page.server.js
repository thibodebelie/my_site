/** @type {import('./$types').PageServerLoad} */
export async function load() {
    async function addData(){
        const { data, error } = await supabase
            .from('activiteiten')
        .insert([
            { Datum: 'datum', Begin: 'begin', Einde: 'einde' , Activiteit:'activiteit', Locatie:'locatie', Groep:'groep' },
        ]).select()
    
    return {};
};

}
  