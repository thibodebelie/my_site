<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let datum = "2 t.e.m 8 juli"
    let datumOuder = "2 t.e.m 11 juli"
    let thema = " 'Naar de ruimte' "
    let datumBekend = "Belangrijke datum: 28 mei"
</script>

<style>
.kamp {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.kamp h1 {
    font-size: 36px;
    margin-bottom: 20px;
}

.kamp p {
    font-size: 18px;
    margin-bottom: 15px;
}
.pdf {
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }

    .pdf object {
        width: 100%;
        height: calc(40vw);
    }

@media only screen and (max-width: 600px) {
    .kamp {
        padding: 10px;
    }

    .kamp h1 {
        font-size: 28px;
    }

    .kamp p {
        font-size: 16px;
    }
    .pdf {
            padding: 10px;
        }
}

</style>

<div class="kamp">
    <h1><b>KAMP 2024:</b></h1>
    <p class="info">Ons KLJ-weekend is net gepasseerd, dus tijd om ons voor te bereiden op het volgende: Ons mega-fantastisch kamp!
            Zoals elk jaar staat dit gepland van <b>{datum}</b> voor de mini- en maximin. En van <b>{datumOuder}</b> voor  de  +12.

    </p>
    <p class= "uitnodiging">
        Iedereen die mee op de 'weekendactiviteit' is geweest, heeft de kampuitnodiging toen mogen ontvangen. 
        De andere leden krijgen het boekje begin mei bezorgd.    
        Wat we al kunnen verklappen is dat ons thema <b>{thema}</b> zal zijn, 
        maar als je verder wilt weten wat er gaat gebeuren moet je zeker begin juli vrijhouden.
    </p>
    <p class="digitale">
        Onderstaand vind je de digitale versie terug van de uitnodiging. 
        Zo vergeet je zeker niets mee te nemen als je de papieren versie  toch niet meer terugvindt. :&#41;
    </p>
    <p class="belangrijke-datum">
        <b>{datumBekend}</b> moeten de kampinschrijvingen binnen zijn.
    </p>
    <p class="vragen-contact">
        Bij eventuele vragen mag je een van de leiding altijd aanspreken of contacteren.
    </p>
</div>

<div class="pdf">
    <!-- svelte-ignore a11y-missing-attribute -->
    <object data="src\images\KLJ KAMP pdf.pdf" type="application/pdf" >
    </object>

</div>