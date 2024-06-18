<script lang="ts">
	import tippy from '$lib/helper/tippyAction';
	import { SliceText } from '$lib/helper/sliceText';
	import { ArrowRightIcon, GithubIcon } from 'svelte-feather-icons';
	export let cardData: {
		title: string;
		picture: string;
		description: string;
		ratings: number;
		tags: string[];
		liveLink?: string;
		codeLink?: string;
	};
	let ishoverd = false;

	const { title, picture, tags, description, ratings, liveLink, codeLink } = cardData;
	let desc = SliceText(description, 100);
	$: if (ishoverd) desc = SliceText(description, 350);
	$: if (!ishoverd) desc = SliceText(description, 100);

	const tit = SliceText(title, 30);

	const handleMouveOver = () => (ishoverd = true);
	const handleMouseOut = () => (ishoverd = false);
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<div
	class="card-container z-[0] w-[18rem] h-[25rem] min-h-fit bg-black text-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl relative group"
	on:mouseover={handleMouveOver}
	on:mouseout={handleMouseOut}
>
	<div class="h-full">
		<img
			class="w-full h-[50%] object-cover transition duration-500 ease-in-out group-hover:blur-sm group-hover:grayscale"
			src={picture}
			alt={title}
		/>
	</div>
	<div
		class=" inset-0 absolute group-hover:bg-black group-hover:bg-opacity-50 flex flex-col justify-end"
	>
		<div
			class="transition-transform transform group-hover:translate group-hover:scale-105 duration-500 ease-in-out"
		>
			<div class=" group-hover:translate-y-[-20px] ease-out duration-500 px-2 py-6">
				<h1 class="text-xl font-semibold mb-2">{tit}</h1>
				<p class="text-sm mb-2 text-start">{desc}</p>
				<div class="flex items-center mb-2">
					<span class="text-yellow-500 mr-1">
						{Array.from({ length: Math.round(ratings) }, (_) => '★')}
						{Array.from({ length: 5 - Math.round(ratings) }, (_) => '☆')}
					</span>
					<span class="">{ratings}/5</span>
				</div>
				<div class="flex flex-wrap">
					{#each tags as tag}
						<span class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs mr-1 mb-1"
							>{tag}</span
						>
					{/each}
				</div>
			</div>
			<div class=" hidden group-hover:block group-hover:translate-y-[-20px]">
				<div class="flex justify-center gap-6 mt-4">
					{#if liveLink}
						<a
							use:tippy={{ content: 'Live demo' }}
							href={liveLink}
							target="_blank"
							class=" bg-gray-500 bg-opacity-50 px-2 py-1 rounded-full text-xs mr-1 mb-1"
						>
							<ArrowRightIcon />
						</a>
					{/if}
					{#if codeLink}
						<a
							use:tippy={{ content: 'Source code' }}
							href={codeLink}
							target="_blank"
							rel="noopener noreferrer"
							class=" bg-gray-500 bg-opacity-50 px-2 py-1 rounded-full text-xs mr-1 mb-1"
						>
							<GithubIcon />
						</a>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
