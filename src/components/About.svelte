<script>
	import { onMount } from 'svelte';
	import { getData } from '../helpers/DataHelper'

	let properties = {};
	let image = ''

	onMount(() => {
		getData().then(res => {
			properties = res
			image = `http://zoe.meghanhein.com/admin/jsonapi/file/file/${res.aboutImageId}`
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