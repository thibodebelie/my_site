<script>
	import Footer from './../../components/footer.svelte';
	import Header from './../../components/header.svelte';
    /** @type {import('./$types').LayoutData} */
    export let data;
</script>

<Header/>
<slot><!-- optional fallback --></slot>


<Footer/>
