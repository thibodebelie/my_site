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
        try{
            const formData = await request.formData()
            const naam = formData.get('naam')
            const voornaam = formData.get('voornaam')
            const email = formData.get('email')
            const bericht = formData.get('bericht')
            const nummer = formData.get('nummer')

            if (!naam || !voornaam || !email || !bericht || !nummer) {
                alert('Alle velden dienen ingevuld te worden!');
                return;
            }
    
            const {error} = await supabase.from("contact").insert([
                { naam: naam, voornaam: voornaam, email: email , bericht: bericht, nummer: nummer},
            ])
            if (error) {
                throw new Error("Data niet opgenomen in de database.");
            }
            return {
                status: 400,
                body: 'Data succesvol ingevoerd!',
            };
        } catch (error){
            return{
                status:400, 
                body: error.message,
            };
        }
    }
};