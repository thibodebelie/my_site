<script>
    /** @type {import('./$types').PageData} */
    import {goto} from '$app/navigation'
    export let data;
</script>

<link rel="stylesheet" href="src\routes\leiding\style.css">


    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="container">
    <h1><a href="../groepen/miniMin">Mini-Min</a></h1>

    <div class="mini-Min" on:click={() => {goto('groepen/miniMin')}}>
        <div class ="image-box">
            <img src="src\images\mini-min_leiding.jpg" alt="mini-Min leiding" >
        </div>

        <div class="content">
            <h2> Leiding Mini-Min</h2>
            <p>Kyana, Liese, Nicky & Rune <br>
                1ste - 3de studiejaar    
            </p>
        </div>
    
    </div>

    <h1><a href="../groepen/maxiMin">Maxi-min</a></h1>
    <div class="mini-Min" on:click={() => {goto('groepen/maxiMin')}}>
        <div class ="image-box">
            <img src="src\images\maxi-min_leiding.jpg" alt="mini-Min leiding">
        </div>

        <div class="content">
            <h2> Leiding Maxi-Min</h2>
            <p>Britt, Kenza, Jinte, Nelle & Amber<br>
                4de - 6de studiejaar    
            </p>
        </div>
    
    </div>

    <h1><a href="../groepen/tussers">Tussers</a></h1>
    <div class="mini-Min" on:click={() => {goto('groepen/tussers')}}>
        <div class ="image-box">
            <img src="src\images\tussers_leiding.jpeg" alt="mini-Min leiding">
        </div>

        <div class="content">
            <h2> Leiding Tussers</h2>
            <p>Marthe, Linde, Lien <br>
                1ste - 4de middelbaar    
            </p>
        </div>
    </div>

    <h1><a href="../groepen/hoofdleiding" >Hoofdleiding</a></h1>
    <p class="plussers" >Leiding van de Plussers </p> 
    <div class="mini-Min" on:click={() => {goto('groepen/hoofdleiding')}}>
        <div class ="image-box">
            <img src="src\images\Hoofdleiding.jpg" alt="mini-Min leiding">
        </div>

        <div class="content">
            <h2> Hoofdleiding</h2>
            <p>Jelke, Nele <br>
            </p> 
        </div>
    </div>



</div>

