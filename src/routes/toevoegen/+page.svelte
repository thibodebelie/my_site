<script>
    import { goto } from '$app/navigation';
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

    

    async function addData(){
        let formData = new FormData();
        formData.append("datum",datumInput);
        formData.append("begin",beginInput);
        formData.append("einde",eindeInput);
        formData.append("activiteit",activiteitInput);
        formData.append("locatie",locatieInput);
        formData.append("groep",groepInput);

        const responce = await fetch("?/addData",{
            method: "POST",
            body: formData
        })
    }
/*
    const isLeider = data.user.user_metadata.leider 
    console.log(isLeider == "false")
    onMount(() =>{
        if(isLeider == "false"){
            goto("/login")
        }
    })
*/  
    
</script>


<br/><br/><br/><br/><br/>
<form >
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
    <button on:click={() =>addData()}>Activiteit Toevoegen</button> <br/>
</form>
<br/><br/><br/><br/><br/>

