<script>
	import { supabase } from './../../lib/supabaseClient.js';
	import Footer from './../../components/footer.svelte';
	import Header from './../../components/header.svelte';
    /** @type {import('./$types').PageData} */
    export let data;
    
    /** @type {import('./$types').ActionData} */
    //export let form;
    let datumInput =""
    let beginInput = ""
    let eindeInput = ""
    let activiteitInput = ""
    let locatieInput = "" 
    let groepInput = ""


    const handleSubmit = async ()=> {
        event.preventDefault();

        const {data , error} = await supabase.from("activiteiten").insert([
            {   
                datum: datumInput,
                begin: beginInput,
                einde: eindeInput,
                activiteit: activiteitInput, 
                locatie: locatieInput,
                groep: groepInput 
            }]);
            if (error) {
            console.error("Error inserting data:", error);
            } else {
            console.log("Data inserted successfully:", data);
            }    
    } 
    
</script>

<Header/>
<br/><br/><br/><br/><br/>
<form on:submit|preventDefault={handleSubmit} action="">
    <input type="date"  name="datum"        placeholder="Datum"         bind:value={datumInput}> <br/> <br/>
    <input type="time"  name="begin"        placeholder="Beginuur"      bind:value={beginInput}>
    <input type="time"  name="einde"        placeholder="Einduur"       bind:value={eindeInput}> <br/>
    <input type="text"  name="activiteit"   placeholder="Activiteit"    bind:value={activiteitInput}> <br/>
    <input type="text"  name="locatie"      placeholder="Locatie"       bind:value={locatieInput}>
    <select bind:value={groepInput}>
        <option value="Mini-Min">Mini-Min</option>
        <option value="Maxi-Min">Maxi-Min</option>
        <option value="Tussers">Tussers</option>
        <option value="Hoofdleiding">Hoofdleiding</option>
    </select>
    <button type="submit">Activiteit Toevoegen</button> <br/>
</form>
<br/><br/><br/><br/><br/>
<Footer/>

