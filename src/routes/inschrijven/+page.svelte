<script>
	import { supabase } from '$lib/supabaseClient';
	import Footer from './../../components/footer.svelte';
	import Header from './../../components/header.svelte';
    /** @type {import('./$types').PageData} */
    export let data;

    let kampData = "Kamp 2023"
</script>
<style>
h1{
    color: #4b4c4d;
}
h1 span{
    font-weight: bold;
    color: rgb(233,43,43);
}
body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    text-align: center;
}
input[type="text"], select {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}
button {
  display: flex;
  align-items: center;
  font-family: inherit;
  cursor: pointer;
  font-weight: 500;
  font-size: 17px;
  padding: 0.8em 1.3em 0.8em 0.9em;
  color: white;
  background: #ad5389;
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  border: none;
  letter-spacing: 0.05em;
  border-radius: 16px;
}

button svg {
  margin-right: 3px;
  transform: rotate(30deg);
  transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}

button span {
  transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}

button:hover svg {
  transform: translateX(5px) rotate(90deg);
}

button:hover span {
  transform: translateX(7px);
}



</style>


<Header/>
<h1> Inschrijvingsformulier <span>{kampData}</span>!</h1>

<input type="text" name="" id="" placeholder="Naam">
<input type="text" name="" id="" placeholder="Voornaam">
<input type="text" name="" id="" placeholder="Telefoonnummer">
<select>
    <option value="Mini-Min">Mini-Min</option>
    <option value="Maxi-Min">Maxi-Min</option>
    <option value="Tussers">Tussers</option>
    <option value="Hoofdleiding">Hoofdleiding</option>
</select>

<input type="file" name="" id="" placeholder="Upload pdf medische fiche" accept=".pdf"><br>
<br><br>

<button>
    <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
      fill="currentColor"
    ></path>
  </svg>
  <span>Inschrijven voor het onvergetelijke kamp</span>

</button>

<Footer/>