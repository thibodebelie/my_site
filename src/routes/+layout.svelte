<script>
	import FooterNew from './../components/footerNew.svelte';
	import Navbar from './../components/navbar.svelte';
	import NavbarLogedIn from './../components/navbarLogedIn.svelte';
	import NavbarLeiding from './../components/navbarLeiding.svelte'
    import "../app.css"
	import { onMount } from 'svelte';


	export let data;
	const isLogedin = data.user;
	const isLeider = data?.user?.user_metadata?.leider;
	
</script>

<div>
	{#if isLogedin}
		{#if isLeider == 'true'}
			<NavbarLeiding/>
		{:else}
			<NavbarLogedIn/>
		{/if}
	{:else}
		<Navbar/>
	{/if}
</div>
	
<slot/>

<FooterNew/>