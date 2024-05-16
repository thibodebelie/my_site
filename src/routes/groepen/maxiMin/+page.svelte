<script>
    export let data
</script>

<h1 class="self-center text-2xl font-semibold whitespace-nowrap dark:text-greenKLJ text-center mt-5">MaxiMin</h1>

<ul class="list-none p-0  m-5">
  {#each data.post as { datum, begin, einde, activiteit, locatie }}
  <li class="mb-5 p-2 rounded flex flex-wrap border-2 border-greenKLJ">
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
    <p class="m-3">Activiteit: {activiteit}</p>
    <p class="w-full ml-3">Locatie: {locatie}</p>
  </li>
  {/each}
</ul>
