
/** @type {import('./$types').PageServerLoad} */
export async function load({ params , locals: { supabase }}) {
    const { data , error } = await supabase.from("kamp").select();
    
    return {};
}

async function addData() {
    const { data, error } = await supabase
        .from('kamp')
        .insert([
            { naam: 'naam', voornaam: 'voornaam', nummer: 'nummer', groep: 'groep'},
        ])
        .select();
}

/** @type {import('./$types').Actions} */
export const actions = {
    addData: async ({ locals: { supabase }, request }) => {
        try {
            const formData = await request.formData();
            const naam = formData.get('naam');
            const voornaam = formData.get('voornaam');
            const nummer = formData.get('nummer');
            const groep = formData.get('groep');
        
            if (!naam || !voornaam || !nummer || !groep) {
                alert('Alle velden dienen ingevuld te worden!');
                return;
            }
            
            const { error } = await supabase.from("kamp").insert([
                { naam: naam, voornaam: voornaam, nummer: nummer, groep: groep },
            ]);
            
            if (error) {
                throw new Error("Data niet opgenomen in de database.");
            }
            
            return {
                status: 400,
                body: 'Data succesvol ingevoerd!',
            };
        } catch (error) {
            return {
                status: 400,
                body: error.message,
            };
        }
    },
};

