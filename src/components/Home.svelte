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

<style type="text/scss">
	@import '../styles/Home.scss';
</style>

<div>
	{#if properties}
	<h1>{properties.homeTitle}</h1>
	<h2>{properties.homeField}</h2>
	{@html properties.homeBody}
	{/if}
</div>