<script>
    import { goto } from '$app/navigation';
    import {onMount} from 'svelte';
    /** @type {import('./$types').PageData} */
    export let data;

    let kampData = "Kamp 2024"

    let naamInput =""
    let voornaamInput =""
    let telefoonnummerInput =""
    let groepInput =""
    let pdfInput =""


    async function addData(){
        let formData = new FormData();
        formData.append("naam",naamInput);
        formData.append("voornaam",voornaamInput);
        formData.append("nummer",telefoonnummerInput);
        formData.append("groep",groepInput);
        formData.append("pdf",pdfInput);

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
    if (!telefoonnummerInput) {
        messages.push("Gelieve de telefoonnummer in te vullen.");
    }
    if (!groepInput) {
        messages.push("Gelieve de groep in te vullen.");
    }
    if (!pdfInput) {
        messages.push("Gelieve de pdf in te dienen.");
    }

    if (messages.length > 0) {
        alert(messages.join("\n"));
        return false;
    }
    return true;

    
}
    const isLid = data?.user?.user_metadata?.leider === 'false';
    onMount(() => {
    if (!isLid) {
        goto("./login");
    }
    });
</script>


<div class="flex flex-col items-center justify-center">
    <h1 class="text-4xl font-bold text-greenNav text-center m-3 border border-redKLJ rounded-md p-2 "> Inschrijvingsformulier <span class="text-greenKLJ">{kampData}</span>!</h1>

    <input type="text" name="naam" placeholder="Naam" bind:value={naamInput} pattern="[a-zA-Z ]+" class="w-10/12 items-center px-3 py-2 mt-2 text-white border border-redKLJ rounded-md bg-greenNav placeholder-white ">
    <input type="text" name="voornaam"  placeholder="Voornaam" bind:value={voornaamInput} pattern="[a-zA-Z ]+"class="w-10/12 px-3 py-2 mt-2 text-white border border-redKLJ rounded-md bg-greenNav placeholder-white ">
    <input type="text" name="telefoonnummer"  placeholder="Telefoonnummer" bind:value={telefoonnummerInput} pattern="[0-9]+" class="w-10/12 px-3 py-2 mt-2 text-white border border-redKLJ rounded-md bg-greenNav placeholder-white">
    <select bind:value={groepInput} class="w-10/12 px-3 py-2 mt-2 text-white border border-redKLJ rounded-md bg-greenNav placeholder-white mb-5" >
        <option value="" selected disabled >Selecteer een van de onderstaande: </option>
        <option value="Mini-Min">Mini-Min</option>
        <option value="Maxi-Min">Maxi-Min</option>
        <option value="Tussers">Tussers</option>
        <option value="Hoofdleiding">Hoofdleiding</option>
    </select>


    <div class="px-3 py-2 mt-2 text-white border border-redKLJ rounded-md bg-greenNav placeholder-white mb-5">
        <input type="file" name="pdf" accept=".pdf" bind:value={pdfInput} id="file-upload" class="hidden">
        <label for="file-upload" class="cursor-pointer">Upload pdf medische fiche</label>
    </div>

    <button on:click={() => addData()} on:click={()=>validateForm()} class="border border-redKLJ rounded-md bg-greenNav p-4 hover:border-black mb-5">
        <span>Inschrijven voor het onvergetelijke kamp</span>
    </button>
</div>
