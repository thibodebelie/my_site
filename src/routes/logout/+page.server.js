import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    logout: async ({locals: {supabase}}) => {
        const {error} = await supabase.auth.signOut();
        redirect(303 , "/home")
        console.log(error);
    }
};  