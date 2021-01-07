<script>
	export let content;
</script>

<style type="text/scss">
	@import '../styles/Home.scss';
</style>

<div id='home'>
	{#if content}
	<h1>{content.title}</h1>
	<h2>{content.field}</h2>
	{@html content.body}
	{/if}
</div>