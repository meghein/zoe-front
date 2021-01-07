<script>
	import { onMount } from 'svelte';
	import { getPageData } from '../helpers/DataHelper';
	import Nav from './Nav.svelte';
	import Home from './Home.svelte';
	import About from './About.svelte';
	import Research from './Research.svelte';
	import Publications from './Publications.svelte';
	import Contact from './Contact.svelte';
	import Footer from './Footer.svelte';

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
	<Research/>
	<Publications/>
	<Contact/>
	<Footer/>
	{/if}
</main>
