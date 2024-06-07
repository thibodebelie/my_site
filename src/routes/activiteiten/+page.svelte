<script>  
    import { goto } from '$app/navigation';
    import {onMount} from 'svelte';
  export let data

  const groupedData = {};
  data.post.forEach(item => {
    if (!groupedData[item.groep]) {
      groupedData[item.groep] = [];
    }
    groupedData[item.groep].push(item);
  });

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
    let providedId =""

    const isLeider = data?.user?.user_metadata?.leider === 'true';
    console.log(isLeider);
    onMount(() => {
    if (!isLeider) {
      goto("./login");
    }
    });

</script>

<div class="flex flex-col items-center justify-center p-4 p"> 
  <p class="pb-3">Verwijder één van de onderstaande activiteiten aan de hand van de id.</p>
  <div class="flex flex-col items-center space-y-4">
      <input type="number" bind:value={providedId} placeholder="Id van de activiteit" 
        class=" border border-gray-300 text-white text-center text-sm rounded-lg w-full p-2.5 bg-greenNav placeholder-white" />
      <button on:click={() => deleteVraag(providedId)}
        class="text-greenNav hover:text-white border border-greenNav hover:bg-greenNav  font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 dark:border-greenNav dark:text-greenNav dark:hover:text-white dark:hover:bg-greenNav items-center"><span>Verwijder</span></button>
  </div>
</div>


{#each Object.keys(groupedData) as groep}
  <h2 class="text-3xl text-redKLJ font-bold ml-4 text-center">{groep}</h2>
  <ul class="border-4 border-greenKLJ rounded-lg m-4 p-4">
    {#each groupedData[groep] as { datum, begin, einde, activiteit, locatie , id}}
      <li class="mb-5 p-2 rounded-md flex flex-wrap border-2 border-greenKLJ">
        <p class="m-3 text-base text-black">
          <span class="text-red-600 font-bold">Datum: </span>
          <span class="block">{datum}</span>
        </p>
        <p class="m-3 text-base text-black">
          <span class="text-red-600 font-bold">Begin: </span>
          <span class="block">{begin}</span>
        </p>
        <p class="m-3 text-base text-black">
          <span class="text-red-600 font-bold">Einde: </span>
          <span class="block">{einde}</span>
        </p>
        <p class="m-1 border-2 rounded-md pl-1 p-2  border-greenKLJ">Activiteit: {activiteit}</p>
        <p class="w-full m-3">Locatie: {locatie}</p>
        <p class="w-full ml-3">Id: {id}</p>
        <a href="../edit" class="ml-3 pt-3 underline text-blue-700">Edit</a>
      </li>
    {/each}
  </ul>
{/each}
