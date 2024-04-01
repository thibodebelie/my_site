<script>
	import { dictionary } from './../../../.svelte-kit/generated/client/app.js';
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<link rel="stylesheet" href="src\routes\contact\style.css">

<div class="contactForm">
    <div class="contact"><b>CONTACT US</b></div>
    <div class="explenation"> Heb je een vraag? Wil je graag iets weten? Of ben je gewoon nieuwsgierig? <br>
        Stuur dan zeker een berichtje naar ons e-mailadres! <br><br><br><br>
    </div>


    <!-- Verander email naar een nieuwe email die voor dit project gemaakt zal worden-->
    <form id="formContact" action="https://formsubmit.co/thibo.debelie@hotmail.com" method="POST"> 
        Naam: <br/>
        <input type="text" id="naam" class="input"> <br/>
        Voornaam: <br/>
        <input type="text" id="voornaam" class="input"> <br/>
        Email: <br/>
        <input type="email" id="email" class="input"> <br/>
        Bericht: <br/>
        <textarea id="message" cols="30" rows="10" class="input"></textarea> <br/><br/>          
        <button id="SubmitButton">Submit</button>
    </form>




</div>