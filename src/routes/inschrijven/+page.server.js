/** @type {import('./$types').PageServerLoad} */
export async function load({ params , locals: { supabase }}) {
    const {data , error} = await supabase.from("kamp").select();
    
    return {};
};

async function addData(){
    const { data, error } = await supabase
        .from('kamp')
    .insert([
        { naam: 'naam', voornaam: 'voornaam', nummer: 'nummer' , groep:'groep' , pdf : 'pdf' },
    ]).select()
}


/** @type {import('./$types').Actions} */
export const actions = {
    addData: async({locals:{supabase} , request}) => {
        const formData = await request.formData()
        const naam = formData.get('naam')
        const voornaam = formData.get('voornaam')
        const nummer = formData.get('nummer')
        const groep = formData.get('groep')
        const pdf = formData.get('pdf')
    
        const {error} = await supabase.from("kamp").insert([
            { naam: naam, voornaam: voornaam, nummer: nummer , groep: groep, pdf: pdf },
        ])
    }
};