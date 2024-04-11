<script>
	import Header from './../../components/header.svelte';
	import Footer from './../../components/footer.svelte';
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<link rel="stylesheet" href="src\routes\leiding\style.css">


<Header/>

<div class="container">
    <h1><a href="..\miniMin">Mini-Min</a></h1>
    <div class="mini-Min">
        <a href="..\miniMin">
        <div class ="image-box">
            <img src="src\images\mini-min_leiding.jpg" alt="mini-Min leiding">
        </div>

        <div class="content">
            <h2> Leiding Mini-Min</h2>
            <p>Kyana, Liese, Nicky & Rune <br>
                1ste - 3de studiejaar    
            </p>
        </div>
    </a>
    </div>

    <h1><a href="..\maxiMin">Maxi-min</a></h1>
    <div class="mini-Min">
        <a href="..\maxiMin">
        <div class ="image-box">
            <img src="src\images\maxi-min_leiding.jpg" alt="mini-Min leiding">
        </div>

        <div class="content">
            <h2> Leiding Maxi-Min</h2>
            <p>Britt, Kenza, Jinte, Nelle & Amber<br>
                4de - 6de studiejaar    
            </p>
        </div>
    </a>
    </div>

    <h1><a href="..\tussers">Tussers</a></h1>
    <div class="mini-Min">
        <a href="..\tussers">
        <div class ="image-box">
            <img src="src\images\tussers_leiding.jpeg" alt="mini-Min leiding">
        </div>

        <div class="content">
            <h2> Leiding Tussers</h2>
            <p>Marthe, Linde, Lien <br>
                1ste - 4de middelbaar    
            </p>
        </div>
    </a>
    </div>

    <h1><a href="..\hoofdleiding" >Hoofdleiding</a></h1>
    <p class="plussers" >Leiding van de Plussers </p> 
    <div class="mini-Min">
        <a href="..\hoofdleiding">  
        <div class ="image-box">
            <img src="src\images\Hoofdleiding.jpg" alt="mini-Min leiding">
        </div>

        <div class="content">
            <h2> Hoofdleiding</h2>
            <p>Jelke, Nele <br>
            </p>
        </div>
    </a>
    </div>



</div>


<Footer/>