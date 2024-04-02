<script>
	import Header from './../../components/header.svelte';
	import Footer from './../../components/footer.svelte';
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<link rel="stylesheet" href="src\routes\leiding\style.css">


<Header/>

<div class="container">
    <h1>Mini-Min</h1>
    <div class="mini-Min">
        <a href="..\groepen\miniMin">
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

    <h1>Maxi-Min</h1>
    <div class="mini-Min">
        <a href="..\groepen\miniMin">
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

    <h1>Tussers</h1>
    <div class="mini-Min">
        <a href="..\groepen\miniMin">
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

    <h1>Hoofdleiding</h1>
    <div class="mini-Min">
        <a href="..\groepen\miniMin">
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