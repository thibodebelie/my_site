<script>
    /** @type {import('./$types').PageData} */
    export let data;

    /** @type {import('./$types').ActionData} */
    let naamInput=""
    let voornaamInput=""
    let emailInput =""
    let berichtInput=""
    let nummerInput=""
    
    async function addData(){
        let formData = new FormData();
        formData.append("naam",naamInput);
        formData.append("voornaam",voornaamInput);
        formData.append("email",emailInput);
        formData.append("bericht",berichtInput);
        formData.append("nummer",nummerInput);

        const responce = await fetch("?/addData",{
            method: "POST",
            body: formData
        })
    }

    function validateForm() {
    const messages = [];

    if (!naamInput) {
        messages.push("Gelieve de naam in te vullen.");
    }
    if (!voornaamInput) {
        messages.push("Gelieve de voornaam in te vullen.");
    }
    if (!emailInput) {
        messages.push("Gelieve het E-mailadres in te vullen.");
    }
    if (!berichtInput) {
        messages.push("Gelieve de vraag te vermelden.");
    }
    if (!nummerInput) {
        messages.push("Gelieve de telefoonnummer in te vullen.");
    }

    if (messages.length > 0) {
        alert(messages.join("\n"));
        return false;
    }
    return true;
}

</script>

<div class=" text-gray-700 ml-24">
    <div class="text-2xl text-redKLJ"><b>CONTACT US</b></div>
    <div class="text-base"> Heb je een vraag? Wil je graag iets weten? Of ben je gewoon nieuwsgierig? <br>
        Stuur dan zeker een berichtje naar ons <a href="mailto:kljmeisjeshamont@gmail.com">e-mailadres</a>!
        Of vul onderstaande form in. 
        <p>Indien je wenst is het mogelijk om telefonisch contact op te nemen met de hoofdleiding.</p>
        <div class="nummers">
            <b>Nele Meurkens</b>: +32 470 27 88 35 <br>
            <b>Jelke Palmans</b>: +32 496 13 20 86
        </div>
    </div>
     
    <form  class="flex flex-col space-y-4 w-4/5 mt-12 mb-10"> 
        <label for="naam" class="font-bold">Naam:</label>
        <input type="text" name="naam" id="naam" pattern="[a-zA-Z ]+" class="input border-2 border-gray-300 p-2 rounded-md" bind:value={naamInput}>
    
        <label for="voornaam" class="font-bold">Voornaam:</label>
        <input type="text" name="voornaam" id="voornaam" pattern="[a-zA-Z ]+" class="input border-2 border-gray-300 p-2 rounded-md" bind:value={voornaamInput}>
    
        <label for="email" class="font-bold">Email:</label>
        <input type="email" name="email" id="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]" class="input border-2 border-gray-300 p-2 rounded-md" bind:value={emailInput}>
    
        <label for="nummer" class="font-bold">Nummer:</label>
        <input type="text" name="nummer" id="nummer" pattern="[0-9]+" class="input border-2 border-gray-300 p-2 rounded-md" bind:value={nummerInput}>
    
        <label for="bericht" class="font-bold">Bericht:</label>
        <textarea type="text" name="bericht" id="bericht" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]" class="input border-2 border-gray-300 p-2 rounded-md" bind:value={berichtInput} cols="30" rows="10"></textarea>
    
        <button on:click={() => addData()} on:click={()=>validateForm()} type="submit" class="bg-greenNav text-white hover:text-redKLJ hover:bg-greenKLJ font-bold py-2 px-4 rounded pr-5 group">
            <span class="animate-caret ">Submit</span>
        </button>    
    </form>
</div>
