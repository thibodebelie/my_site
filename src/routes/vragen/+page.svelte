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

<style>
button {
 outline: none;
 cursor: pointer;
 border: none;
 padding: 0.9rem 2rem;
 margin: 0;
 font-family: inherit;
 font-size: inherit;
 position: relative;
 display: inline-block;
 letter-spacing: 0.05rem;
 font-weight: 700;
 font-size: 17px;
 border-radius: 500px;
 overflow: hidden;
 background: #38AD34;
 color: ghostwhite;
}

button span {
 position: relative;
 z-index: 10;
 transition: color 0.4s;
}

button:hover span {
 color: rgb(223,43,43);
 font-size:bold;
}

button::before,
button::after {
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 z-index: 0;
}

button::before {
 content: "";
 background: #000;
 width: 120%;
 left: -10%;
 transform: skew(30deg);
 transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
}

button:hover::before {
 transform: translate3d(100%, 0, 0);
}

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
    
.verwijder {
    margin-bottom: 20px;
    border: 1px solid #38AD34;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column; 
    align-items: center;

}

.verwijder .text {
    width: 100%;
    margin-bottom: 10px;
    color: rgb(223,43,43);
    font-weight: bold;
    text-align: center;
}

.input-group {
    display: flex;
    flex-direction: column; 
    align-items: center; 
    width: 100%; 
}

input[type="number"] {
    margin-bottom: 10px;
    width: 10%;
    min-width: 160px; 
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
  

<div class="verwijder"> 
    <p class="text">Verwijder één van de onderstaande vragen aan de hand van de id.</p>
    <div class="input-group">
        <input type="number" bind:value={providedId} placeholder="Voer de id van de vraag in." />
        <button on:click={() => deleteVraag(providedId)}><span>Verwijder</span></button>
    </div>
</div>


<ul>
{#each data.post as {id,naam,voornaam,email, bericht , nummer}}
     <li>
        <p class="info">
            <span class="highlight">Id: </span>
            <span class="data">{id}: </span> <br> 
        </p>
        <p class="info">
            <span class="highlight">Naam: </span>
            <span class="data">{naam}: </span>
        </p>
        <p class="info">
            <span class="highlight" >Vooraam: </span>
            <span class="data">{voornaam}</span>
        </p>
        <p class="info">
            <span class="highlight">E-mail: </span>
            <span class="data">{email}</span>
        </p>
        <p class="info">
            <span class="highlight">Nummer: </span>
            <span class="data">{nummer}</span>
        </p>
        <p class="info">
            <span class="highlight">Bericht:</span>
            <span class="data">{bericht}</span> 
        </p>
     </li>
{/each}
</ul>


