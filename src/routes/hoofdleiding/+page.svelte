<script>
	import Footer from './../../components/footer.svelte';
	import Header from './../../components/header.svelte';
    export let data
</script>
<style>
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
  
    li {
      margin-bottom: 20px;
      border: 1px solid #38AD34;
      padding: 10px;
      border-radius: 5px;
      display: flex;
      flex-wrap: wrap;
    }
  
    .info {
      width: calc(100% / 3);
    }
  
    p {
      margin: 0;
      font-size: 16px;
      color: black;
    }
  
    .activiteit {
      margin-bottom: 10px;
    }
  
    .highlight {
      color: rgb(233, 43, 43);
      font-weight: bold;
    }
  
    .activiteit {
      margin-bottom: 10px;
      width: 50%;
      margin-top: 5px;
      margin-bottom: 10px;
    }
  
    .locatie {
      width: 100%;
    }
  
    .data {
      display: block;
    }
  
    @media screen and (max-width: 450px) {
      .info {
        width: 100%;
      }
  
      .highlight,
      .data {
        display: block;
        width: 100%;
      }
    }
  
    @media screen and (min-width: 451px) {
      .data {
        display: inline;
      }
    }
</style>
  
<Header/>

<ul>
    {#each data.post as { datum, begin, einde, activiteit, locatie }}
    <li>
      <p class="info">
        <span class="highlight">Datum: </span>
        <span class="data">{datum}</span>
      </p>
      <p class="info">
        <span class="highlight">Begin: </span>
        <span class="data">{begin}</span>
      </p>
      <p class="info">
        <span class="highlight">Einde: </span>
        <span class="data">{einde}</span>
      </p>
      <p class="activiteit">Activiteit: {activiteit}</p>
      <p class="locatie">Locatie: {locatie}</p>
    </li>
    {/each}
</ul>
  
<Footer/>