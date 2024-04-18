<script>
	import Footer from './../../components/footer.svelte';
	import Header from './../../components/header.svelte';
    /** @type {import('./$types').PageData} */
    export let data;

    /** @type {import('./$types').ActionData} */
    let naamInput=""
    let voornaamInput=""
    let emailInput =""
    let berichtInput=""
    let nummerInput=""
    
/*
    const handleSubmit = async ()=> {
        event.preventDefault();

        const {data , error} = await supabase.from("contact").insert([
            {   
                naam: naamInput,
                voornaam: voornaamInput,
                email: emailInput,
                bericht: berichtInput,
                nummer: nummerInput 
            }]);
            if (error) {
            console.error("Error inserting data:", error);
            } else {
            console.log("Data inserted successfully:", data);
            window.alert("Het contactformulier werd succesfol ingediend!")
            }    
    } 
*/

</script>

<link rel="stylesheet" href="src\routes\contact\style.css">

<Header/>
<div class="contactForm">
    <div class="contact"><b>CONTACT US</b></div>
    <div class="explenation"> Heb je een vraag? Wil je graag iets weten? Of ben je gewoon nieuwsgierig? <br>
        Stuur dan zeker een berichtje naar ons <a href="mailto:kljmeisjeshamont@gmail.com">e-mailadres</a>!
        Of vul onderstaande form in. 
        <p>Indien je wenst is het mogelijk om telefonisch contact op te nemen met de hoofdleiding.</p>
        <div class="nummers">
            <b>Nele Meurkens</b>: +32 470 27 88 35 <br>
            <b>Jelke Palmans</b>: +32 496 13 20 86
        </div>
    </div>
    <br><br><br><br>
    <form on:submit|preventDefault={handleSubmit} action=""> 
        Naam: <br/>
        <input type="text" name="naam" class="input" bind:value={naamInput}> <br/>
        Voornaam: <br/>
        <input type="text" name="voornaam"     class="input" bind:value={voornaamInput}> <br/>
        Email: <br/>
        <input type="email" name="email" class="input" bind:value={emailInput}> <br/>
        Nummer: <br>
        <input type="int" name="nummer" class="input" bind:value={nummerInput}> <br>
        Bericht: <br/>
        <textarea  type="text" name="bericht"  class="input" bind:value={berichtInput} cols="30" rows="10"></textarea> <br/><br/>          
        
        <button type="submit">Submit</button>
    </form>
</div>



<Footer/>
