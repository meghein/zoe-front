<script>

	const list = ['About', 'Research', 'Publications', 'Contact'];

	function scroll(page) {
		document
			.getElementById(page)
			.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<style type="text/scss">
	@import '../styles/Nav.scss';
</style>

<nav id='nav-container'>
	<ul id="nav-items">
		{#each list as item }
			<li>
				<a href="#{item}" class="item" on:click|preventDefault={() => (scroll(item.toLowerCase()))}>
					{item}
				</a>
			</li>
		{/each}
	</ul>
</nav>