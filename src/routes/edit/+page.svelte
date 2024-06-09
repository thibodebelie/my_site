<script>
    import { goto } from '$app/navigation';
    import {onMount} from 'svelte';
    /** @type {import('./$types').PageData} */
    export let data;
    
    /** @type {import('./$types').ActionData} */
    let datumInput =""
    let beginInput = ""
    let eindeInput = ""
    let activiteitInput = ""
    let locatieInput = "" 
    let groepInput = ""
    let idInput =""

  
    function validateForm() {
    const messages = [];

    if (!datumInput) {
        messages.push("Gelieve de datum in te vullen.");
    }
    if (!beginInput) {
        messages.push("Gelieve het beginuur in te vullen.");
    }
    if (!eindeInput) {
        messages.push("Gelieve het einduur in te vullen.");
    }
    if (!activiteitInput) {
        messages.push("Gelieve de beschrijving van de activiteit te vermelden.");
    }
    if (!locatieInput) {
        messages.push("Gelieve de locatie in te vullen.");
    }
    if(!groepInput){
        messages.push("Gelieve de correcte groep mee te geven!")
    }

    if (messages.length > 0) {
        alert(messages.join("\n"));
        return false;
    }
    return true;
    }

    async function updateActiviteit(){
        let formData = new FormData();
        formData.append("datum",datumInput);
        formData.append("begin",beginInput);
        formData.append("einde",eindeInput);
        formData.append("activiteit",activiteitInput);
        formData.append("locatie",locatieInput);
        formData.append("groep",groepInput);
        formData.append("id",idInput)
        
        const response = await fetch("?/updateActiviteit",{
            method: "POST",
            body: formData
        })

        if (response.ok){
            goto("./activiteiten");
        }
        
    }
    const isLeider = data?.user?.user_metadata?.leider === 'true';
    console.log(isLeider);
    onMount(() => {
    if (!isLeider) {
      goto("./login");
    }
    });

</script>
  
<div class="flex flex-col items-center justify-center mb-32 mt-10">
    <h1 class="text-redKLJ text-2xl font-semibold mb-3">Veranderen van een activiteit</h1>
<form >
    <input type="text" name="id" placeholder="Id" bind:value={idInput} class="w-10/12 items-center px-3 py-2 mt-2 text-white border border-redKLJ rounded-md bg-greenNav placeholder-white ml-4">
    <input type="date"  name="datum"        placeholder="Datum"         bind:value={datumInput} class="w-10/12 items-center px-3 py-2 mt-2 text-white border border-redKLJ rounded-md bg-greenNav placeholder-white ml-4">
    <input type="time"  name="begin"        placeholder="Beginuur"      bind:value={beginInput} class="w-10/12 items-center px-3 py-2 mt-2 text-white border border-redKLJ rounded-md bg-greenNav placeholder-white ml-4">
    <input type="time"  name="einde"        placeholder="Einduur"       bind:value={eindeInput} class="w-10/12 items-center px-3 py-2 mt-2 text-white border border-redKLJ rounded-md bg-greenNav placeholder-white ml-4">
    <input type="text"  name="activiteit"   placeholder="Activiteit"    bind:value={activiteitInput} class="w-10/12 items-center px-3 py-2 mt-2 text-white border border-redKLJ rounded-md bg-greenNav placeholder-white ml-4">
    <input type="text"  name="locatie"      placeholder="Locatie"       bind:value={locatieInput} class="w-10/12 items-center px-3 py-2 mt-2 text-white border border-redKLJ rounded-md bg-greenNav placeholder-white ml-4">
    <select bind:value={groepInput} class="w-10/12 px-3 py-2 mt-2 text-white border border-redKLJ rounded-md bg-greenNav placeholder-white mb-5 ml-4">
        <option value="Mini-Min">Mini-Min</option>
        <option value="Maxi-Min">Maxi-Min</option>
        <option value="Tussers">Tussers</option>
        <option value="Hoofdleiding">Hoofdleiding</option>
    </select>
    <button on:click={()=>updateActiviteit()} on:click={()=>validateForm()}  class="w-10/12 border border-redKLJ rounded-md bg-greenNav p-4 hover:border-black mb-5 ml-4">Activiteit Updaten</button> <br/>
</form>
</div>
  