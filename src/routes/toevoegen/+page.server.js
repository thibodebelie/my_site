/** @type {import('./$types').PageServerLoad} */
export async function load({ params , locals: { supabase }}) {
    const {data , error} = await supabase.from("activiteiten").select();
    
    return {};
};



async function addData(){
    const { data, error } = await supabase
        .from('activiteiten')
    .insert([
        { Datum: 'datum', Begin: 'begin', Einde: 'einde' , Activiteit:'activiteit', Locatie:'locatie', Groep:'groep' },
    ]).select()
}


/** @type {import('./$types').Actions} */
export const actions = {
    addData: async({locals:{supabase} , request}) => {
        const formData = await request.formData()
        const datum = formData.get('datum')
        const begin = formData.get('begin')
        const einde = formData.get('einde')
        const activiteit = formData.get('activiteit')
        const locatie = formData.get('locatie')
        const groep = formData.get('groep')
    
        const {error} = await supabase.from("activiteiten").insert([
            { datum: datum, begin: begin, einde: einde , activiteit: activiteit, locatie: locatie, groep: groep },
        ])
    }
};