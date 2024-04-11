<script>
	import Footer from './../../components/footer.svelte';
	import Header from './../../components/header.svelte';
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<style>
.info {
    font-size: 16px;
    color: #4b4c4d;
    line-height: 1.5;
    max-width: 590px;
    margin: 0 auto;
    padding: 20px;
    text-align: left;
}

.info p {
    margin-top: 5px;
    margin-bottom: 5px;
    color: #38AD34;
    font-size: 20px;
    font-weight: bold;
}

.pdf {
    display: flex; /* Use flexbox for layout */
    justify-content: center; /* Center-align items horizontally */
    flex-wrap: wrap;
    margin-top: 20px; /* Add margin for spacing */
}

.pdf object {
    width: 100%; /* Set the width of each PDF to 100% */
    max-width: 600px; /* Limit max width for responsiveness */
    height: 800px;
    border: 1px solid #38AD34;
    margin: 0 20px 20px 20px; /* Add margin for spacing */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Add shadow effect */
    transition: box-shadow 0.3s ease; /* Add transition effect for shadow */
}

@media (max-width: 900px) {
    .pdf object {
        width: calc(70% - 20px); /* Set the width of each PDF to 50% minus margins */
        height: calc(80vw);
    }
}


</style>
<Header/>

<div class="info">
    <p>Hier vind je een aantal belangrijke documenten terug.</p>
    Het is de bedoeling dat alle leden aan het begin van het KLJ-jaar de medische fiche en 
    het inschrijvingsformulier invullen en aan de leiding geven.
</div>

<div class="pdf">
    <!-- svelte-ignore a11y-missing-attribute -->
    <object data="src\images\inschrijving.pdf" type="application/pdf" >
    </object>
        <!-- svelte-ignore a11y-missing-attribute -->

    <object data="src\images\medische_fiche.pdf" type="application/pdf" >
    </object>

</div>

<Footer/>