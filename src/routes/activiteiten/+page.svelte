<script>  
  export let data

  const groupedData = {};
  data.post.forEach(item => {
    if (!groupedData[item.groep]) {
      groupedData[item.groep] = [];
    }
    groupedData[item.groep].push(item);
  });

  async function deleteVraag(id) {
        const { error } = await supabase.from("activiteiten").delete().eq("id", id);
        if (error) {
            console.error("Error deleting data:", error);
        } else {
            console.log("Data deleted successfully!");
            window.alert("De activiteit is met succes verwijderd.")
        }
        window.location.reload();
    }
    let providedId =""

</script>


<div class="verwijder"> 
  <p class="text">Verwijder één van de onderstaande activiteiten aan de hand van de id.</p>
  <div class="input-group">
      <input type="number" bind:value={providedId} placeholder="Voer de id van de activiteit in." />
      <button on:click={() => deleteVraag(providedId)}><span>Verwijder</span></button>
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
      </li>
    {/each}
  </ul>
{/each}
