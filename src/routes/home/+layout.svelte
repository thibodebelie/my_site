<script>
	import Header from './../../components/header.svelte';
    import Footer from "../../components/footer.svelte";
    
</script>
<link rel="stylesheet" href="src\components\header.css">

<Header/>

<slot><!-- optional fallback --></slot>

<Footer/>