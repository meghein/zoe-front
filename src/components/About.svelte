<script>
	export let content;
</script>

<style type="text/scss">
	@import '../styles/About.scss';
</style>

<div id='about-page'>
	{#if content}
	{@html content.body}
	<img src="{`http://zoe.meghanhein.com${content.imageUrl}`}" alt="{content.imageAlt}">
	{/if}
</div>