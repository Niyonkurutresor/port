<script lang="ts">
	import { page } from '$app/stores';
	import Navigation from '$lib/components/navigation.svelte';
	import '../app.css';
	let scrollY: number = 0;
	let topBar: HTMLElement;
	let HeaderOpacity = 0;
	$: if (topBar) {
		HeaderOpacity = scrollY / topBar.offsetHeight < 1 ? scrollY / topBar.offsetHeight : 1;
	}
	$: op = HeaderOpacity.toFixed(1);
	$: console.log(op);
</script>

<svelte:head>
	<title>Porto{$page.data.title ? ` - ${$page.data?.title}` : ''}</title>
</svelte:head>
<svelte:window bind:scrollY />
<div>
	<div class={` absolute top-0 w-full h-fit `}>
		<div
			bind:this={topBar}
			class={` text-white fixed h-[6vh] lg:py-0 lg:h-[10vh] flex justify-between items-center w-full`}
		>
			<div class="absolute bg-black z-0 w-full h-full"></div>
			<div
				class=" z-50 w-full h-full flex justify-between items-start md:items-center px-4 lg:px-12"
			>
				<span class=" font-mono italic font-bold text-2xl text-orange-300"> Tr </span>
				<Navigation />
			</div>
		</div>
	</div>
	<div class="mt-[6vh] lg:mt-[10vh] w-full h-full">
		<slot />
	</div>
</div>
