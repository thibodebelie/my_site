<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>


<div class="text-base text-gray-700 leading-normal p-5 text-left">
    <p class="mt-1 mb-1 text-green-600 text-xl font-bold">Hier vind je een aantal belangrijke documenten terug.</p>
    Het is de bedoeling dat alle leden aan het begin van het KLJ-jaar de medische fiche en 
    het inschrijvingsformulier invullen en aan de leiding geven.
</div>

<div class="flex flex-wrap justify-center mt-5 h-4/5">
    <!-- svelte-ignore a11y-missing-attribute -->
    <object data="src\images\inschrijving.pdf" type="application/pdf" class="w-full sm:w-1/2 lg:w-1/3 h-96">
    </object>
        <!-- svelte-ignore a11y-missing-attribute -->

    <object data="src\images\medische_fiche.pdf" type="application/pdf" class="w-full sm:w-1/2 lg:w-1/3 h-96 mb-10" >
    </object>

</div>
