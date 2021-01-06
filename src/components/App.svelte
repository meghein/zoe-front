<script>
	import { onMount, afterUpdate } from 'svelte';
	import axios from 'axios'

	let properties = {};

	onMount(() => {
		axios
		.get('http://zoe.meghanhein.com/admin/jsonapi/node/page')
		.then(res => {
			for (const page of res.data.data) {
				if (page.attributes.title === 'Home Page') {
					properties.body = page.attributes.body.value;
					properties.title = page.attributes.field_header[0]
					properties.field = page.attributes.field_header[1]
				}
			}
		})
		.catch(error => console.log(error))
	})	
</script>

<main>
	{#if properties.title}
	<h1>{properties.title}</h1>
	{properties.field}
	{@html properties.body}
	{/if}
</main>

<style type="text/scss">
	@import '../styles/App.scss';
</style>