<script>
	import { onMount } from 'svelte';
	import { getData } from '../helpers/DataHelper';
	import Home from './Home.svelte';
	import About from './About.svelte';

	let data;

	onMount(() => {
		getData().then(res => {
			data = res
		})
	})
	
</script>

<style type="text/scss">
	@import '../styles/App.scss';
</style>

<main>
	{#if data}
	<Home content={data.home}/>
	<About content={data.about}/>
	{/if}
</main>
