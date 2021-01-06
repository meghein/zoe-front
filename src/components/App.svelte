<script>
	import { onMount } from 'svelte';
	import { getData } from '../helpers/DataHelper'

	let properties = {};

	onMount(() => {
		getData().then(res => {
			properties = res
		})
	})
</script>

<main>
	{#if properties}
	<h1>{properties.title}</h1>
	<h2>{properties.field}</h2>
	{@html properties.body}
	{/if}
</main>

<style type="text/scss">
	@import '../styles/App.scss';
</style>