/** @type {import('./$types').PageServerLoad} */
export async function load({ params , locals: { supabase }}) {
    const {data , error} = await supabase.from("contact").select();
    
    return {};
};

async function addData(){
    const { data, error } = await supabase.from('contact')
        .insert([
            { Naam: 'naam', Voornaam: 'voornaam', Email: 'email' , Bericht:'bericht' },
        ]).select()  
}


/** @type {import('./$types').Actions} */
export const actions = {
    addData: async({locals:{supabase} , request}) => {
        const formData = await request.formData()
        const naam = formData.get('naam')
        const voornaam = formData.get('voornaam')
        const email = formData.get('email')
        const bericht = formData.get('bericht')
        const nummer = formData.get('nummer')
   
        const {error} = await supabase.from("contact").insert([
            { naam: naam, voornaam: voornaam, email: email , bericht: bericht, nummer: nummer},
        ])
    }
};