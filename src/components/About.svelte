<script>
	export let content;
</script>

<style type="text/scss">
	@import '../styles/About.scss';
</style>

<div id='about'>
	{#if content}
	<div class='body'>
		{@html content.body}
	</div>
	<img src="{`${process.env.DOMAIN}${content.imageUrl}`}" alt="{content.imageAlt}">
	{/if}
</div>