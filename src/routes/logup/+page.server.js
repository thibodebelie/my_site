
/** @type {import('./$types').Actions} */
export const actions = {
    logup: async ({request , locals : {supabase}}) => {
        const formData = await request.formData();
        const first_name = formData.get("first_name");
        const last_name = formData.get("last_name");
        const email = formData.get("email");
        const password = formData.get("password");
    

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options : {
                data: {
                    first_name: first_name,
                    last_name : last_name,
                    leider: "false",
                }
            }
          })
          console.log(data, error , "logup");


    }

};