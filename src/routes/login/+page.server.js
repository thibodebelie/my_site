import { goto } from '$app/navigation';
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
          if (data) {
            redirect(303,'/home');
          } else {
            console.error("Login error:", error);
          }
    },

};

