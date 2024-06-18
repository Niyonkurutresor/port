<!-- <script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	let node: HTMLElement;
	let inter: boolean = false;
</script>

<IntersectionObserver threshold={0} element={node} bind:intersecting={inter}>
	<div class="text-lg" bind:this={node}>
		{#key inter}
			{#if inter}
				<div class="fade-in">
					<h1 class="font-bold">Travels to Ireland and Great Britain</h1>
					<p>
						In 1847, Douglass traveled to Ireland and Great Britain. While overseas, he was
						impressed by the relative freedom he had as a man of color, compared to what he had
						experienced in the United States. Douglass spent two years in Ireland and Great Britain,
						lecturing in churches and chapels. One example was his hugely popular London Reception
						Speech, which Douglass delivered in May 1846 at Alexander Fletcher's Finsbury Chapel.
						Douglass remarked as treated not as a slave or color but as a man in England.
					</p>
				</div>
			{/if}
		{/key}
	</div>
</IntersectionObserver>

<style>
	.text-lg {
		/* Define your styles for text-lg class */
	}

	.fade-in {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	.fade-in.visible {
		opacity: 1;
	}
</style> -->
