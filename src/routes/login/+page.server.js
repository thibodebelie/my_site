import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({params ,request , locals : {supabase}}) => {
        const formData = await request.formData();
        const email = formData.get("email");
        const password = formData.get("password");

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
          })
        //   if(!error){
        //       redirect(307, `home`)
        //   }
        //   else{
        //     fail(400, {message: 'Foutief antwoord'});
        //   }
          redirect(307, `home`)
    },

};

/** @type {import('./$types').PageLoad} */
export async function load({params , locals : {supabase}}) {
    const {data , error} = await supabase.auth.getUser();
    return {
        user: data,
    }   
}