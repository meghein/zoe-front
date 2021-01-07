<script>
	import { onMount } from 'svelte';
	import { getData } from '../helpers/DataHelper'

	let properties = {};
	const domain = process.env.DOMAIN;

	onMount(() => {
		getData().then(res => {
			properties = res.about
		})
	})
</script>

<style type="text/scss">
	@import '../styles/About.scss';
</style>

<div id='about-page'>
	{#if properties.body}
	{@html properties.body}
	<img src="{`http://zoe.meghanhein.com${properties.imageUrl}`}" alt="{properties.imageAlt}">
	{/if}
</div>