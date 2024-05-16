<script>
    export let data;

    let providedId =""


    async function deleteVraag() {
        let formData = new FormData();
        formData.append( "id" , providedId);
        const response = await fetch ("?/deleteVraag" , {
            method:"POST",
            body: formData
        })

        if (response.ok){
            location.reload();

        }
        
    }



</script>

 
<div class="felx flex-col items-center justify-center p-4"> 
    <h1 class="text-xl font-bold text-greenNav text-center m-6 border border-redKLJ rounded-md pb-3 pt-3 mt-0">Verwijder één van de onderstaande vragen aan de hand van de id.</h1>
    <div class="flex flex-col items-center space-y-4">
        <input type="number" bind:value={providedId} placeholder="Voer de id van de vraag in." class="bg-gray-50 border border-gray-300 text-white text-center text-sm rounded-lg w-full p-2.5 dark:bg-greenNav dark:placeholder-white" />
        
        <a href="#" on:click={() => deleteVraag(providedId)} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-redKLJ rounded-full shadow-md group">
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-redKLJ duration-300 -translate-x-full bg-greenNav group-hover:translate-x-0 ease">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-redKLJ transition-all duration-300 transform group-hover:translate-x-full ease">Verwijder</span>
            <span class="relative invisible">Verwijder</span>
        </a>      
    </div>
</div>

<ul class="border-4 border-greenKLJ rounded-lg m-4 p-4">
    {#each data.post as {id, naam, voornaam, email, bericht, nummer}}
      <li class="mb-5 p-2 rounded-md flex flex-wrap border-2 border-greenKLJ">
        <div class="w-full flex flex-col items-center">
          <div class="flex flex-wrap">
            <p class="m-3 text-base text-black">
              <span class="text-redKLJ font-semibold">Id:</span>
              <span class="data">{id}</span>
            </p>
            <p class="m-3 text-base text-black">
              <span class="text-redKLJ font-semibold">Naam:</span>
              <span class="data">{naam}</span>
            </p>
            <p class="m-3 text-base text-black">
              <span class="text-redKLJ font-semibold">Voornaam:</span>
              <span class="data">{voornaam}</span>
            </p>
          </div>
          <div class="flex flex-wrap">
            <p class="m-3 text-base text-black">
              <span class="text-redKLJ font-semibold">E-mail:</span>
              <span class="data">{email}</span>
            </p>
            <p class="m-3 text-base text-black">
              <span class="text-redKLJ font-semibold">Nummer:</span>
              <span class="data">{nummer}</span>
            </p>
          </div>
        </div>
        <p class="m-1 border-2 rounded-md pl-1 p-2 border-greenKLJ">Bericht: {bericht}</p>
      </li>
    {/each}
  </ul>
  
  
       
  




