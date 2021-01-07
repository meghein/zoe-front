<script>
	import { onMount } from 'svelte';
	import { getPageData } from '../helpers/DataHelper';
	import Nav from './Nav.svelte';
	import Home from './Home.svelte';
	import About from './About.svelte';

	let pageData;

	onMount(() => {
		getPageData().then(res => {
			pageData = res
		})
	})
	
</script>

<style type="text/scss">
	@import '../styles/App.scss';
</style>

<main>
	{#if pageData}
	<Nav/>
	<Home content={pageData.home}/>
	<About content={pageData.about}/>
	{/if}
</main>
