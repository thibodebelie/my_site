/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {};
};

async function updateData(){

    const { data, error } = await supabase
.from('activiteiten')
.update({ other_column: 'otherValue' })
.eq('id', 'id')
.select()
}

async function updateActiviteit(){
    const { data, error } = await supabase
        .from('activiteiten')
    .update([
        { Datum: 'datum', Begin: 'begin', Einde: 'einde' , Activiteit:'activiteit', Locatie:'locatie', Groep:'groep' },
    ]).select()
}


/** @type {import('./$types').Actions} */
export const actions = {
    updateActiviteit: async({locals:{supabase} , request}) => {
        const formData = await request.formData()
        const datum = formData.get('datum')
        const begin = formData.get('begin')
        const einde = formData.get('einde')
        const activiteit = formData.get('activiteit')
        const locatie = formData.get('locatie')
        const groep = formData.get('groep')
        const id = formData.get('id')
    
        const {error} = await supabase.from("activiteiten").update([
            { datum: datum, begin: begin, einde: einde , activiteit: activiteit, locatie: locatie, groep: groep },
        ]).eq('id', id)
    }
};