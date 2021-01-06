<script>
	export let name;
	import { onMount, afterUpdate } from 'svelte';
import axios from 'axios'

let pages = [];
let value;
let error = null

afterUpdate(async () => {
	try {
		const res = await axios.get('http://zoe.meghanhein.com/admin/jsonapi/node/article');
		pages = res.data.data[0].attributes
		console.log('this is data', pages);
	} catch (e) {
		error = e
	}
	value = pages.body.value
});
	
</script>

<main>
	<h1>Hello {name}!</h1>
	{#if value}
	{@html value}
	{@html pages.title }
	{/if}
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>