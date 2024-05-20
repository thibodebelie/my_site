<script>
	import FooterNew from './../components/footerNew.svelte';
	import Navbar from './../components/navbar.svelte';
	import NavbarLogedIn from './../components/navbarLogedIn.svelte';
	import NavbarLeiding from './../components/navbarLeiding.svelte'
    import "../app.css"

	export let data;
	

	const isLogedin = data.user;
	const isLeider = data?.user?.user_metadata?.leider;
	
</script>


{#if isLogedin}
	{#if isLeider == 'true'}
		<NavbarLeiding/>
	{:else}
		<NavbarLogedIn/>
	{/if}
{:else}
	<Navbar/>
{/if}

<slot/>

<FooterNew/>