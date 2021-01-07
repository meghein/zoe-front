<script>
	import { onMount } from 'svelte';
	import { getData } from '../helpers/DataHelper'

	let properties = {};
	let image = '';
	const domain = process.env.DOMAIN;

	onMount(() => {
		getData().then(res => {
			properties = res
			image = `${process.env.DOMAIN}admin/jsonapi/file/file/${res.aboutImageId}`
		})
	})
</script>

<style type="text/scss">
	@import '../styles/About.scss';
</style>

<div id='about-page'>
	{#if properties.aboutBody}
	{@html properties.aboutBody}
	<img src="{`http://zoe.meghanhein.com${properties.aboutImageUrl}`}" alt="{properties.aboutImageAlt}">
	{/if}
</div>