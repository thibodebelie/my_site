<script>
	import {enhance} from '$app/forms'
    /** @type {import('./$types').PageData} */
    export let data;
	export let form;
</script>
<h1 class="text-4xl font-bold text-center mb-6">Log in</h1>
<form method="POST" action="?/login" use:enhance class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="email">
			E-mail
		</label>
		<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="email" />
	</div>
	<div class="mb-6">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="password">
			Password
		</label>
		<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" />
	</div>
	<div class="flex items-center justify-between">
		<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
			Login
		</button>
	</div>
</form>
{#if form?.invalid} <mark> {form?.message}! </mark>
{/if}


 