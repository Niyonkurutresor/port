<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import myPic from '$lib/assets/myPic.jpg';
	import ProjectIworkedON from '$lib/components/projects.svelte';
	import { DownloadCloudIcon } from 'svelte-feather-icons';
	import type { PageData } from './$types';
	import HireMe from '$lib/components/HireMe.svelte';
	import { fade } from 'svelte/transition';
	import AboutMe from '$lib/components/about.svelte';
	// import { contactMeSchema } from '$lib/schema/contactMe';
	// import { zod } from 'sveltekit-superforms/adapters';
	// import { superForm } from 'sveltekit-superforms/client';
	import Intesersction from '$lib/components/observer.svelte';
	import TypeWriter from '$lib/components/typeWriter.svelte';
	export let data: PageData;
	// const { form, errors, enhance, constraints, reset } = superForm(data.form, {
	// 	id: 'checkout-payment',
	// 	taintedMessage: 'Your data are not saved.',
	// 	validators: zod(contactMeSchema),
	// 	validationMethod: 'oninput',
	// 	onSubmit: (data) => {
	// 		const allErrorsUndefined = Object.values($errors).every((error) => error === undefined);
	// 		if (allErrorsUndefined) {
	// 			snapshot.restore({
	// 				message: undefined,
	// 				name: undefined,
	// 				email: undefined
	// 			});
	// 		}
	// 	}
	// });

	// export const snapshot = {
	// 	capture: () => {
	// 		return $form;
	// 	},
	// 	restore: (state: { message: string; name: string; email: string }) => {
	// 		$form = state;
	// 	}
	// };

	// function clearFrom() {
	// 	snapshot.restore({
	// 		message: undefined,
	// 		name: undefined,
	// 		email: undefined
	// 	});
	// }

	// intersection obs erver
	// const intesectionObserve = new IntersectionObserver(
	// 	(entries) => {
	// 		entries.forEach((entry) => {
	// 			if (entry.isIntersecting) {
	// 				entry.target.classList.add('show');
	// 			} else {
	// 				entry.target.classList.remove('show');
	// 			}
	// 		});
	// 	},
	// 	{
	// 		threshold: 0.2
	// 	}
	// );
</script>

<div class=" h-fit mb-[10vh] w-full">
	<section
		in:fade
		id="home"
		class="mb-4 flex lg:px-16 lg:pt-[10vh] xl:pt-[10vh] flex-col gap-4 lg:gap-8 md:flex-row lg:justify-start w-full"
	>
		<!-- first section -->
		<div
			class="mt-8 lg:mt-0 flex flex-col gap-6 items-center md:text-start px-8 md:w-[60%] md:items-start lg:justify-center"
		>
			<h1 class=" text-4xl xl:text-6xl font-bold">
				Crafting Innovative <br />
				<span class=" text-orange-300">
					{'   '}
					<TypeWriter
						words={['Software Solutions ']}
						typeSpeed={120}
						deleteSpeed={80}
						loop={true}
					/>
				</span>
			</h1>
			<p class=" text-lg xl:text-2xl">
				Hi, I'm <b>NIYONKURU Tresor</b>, a
				<b> Software developer </b> As a skilled software developer, I specialize in creating modern,
				responsive, and user-friendly applications that solve complex problems. Explore my portfolio
				to see the impact I've made for my clients.
			</p>
			<div class=" flex gap-6">
				<!-- <Button>Explore My Work</Button> -->
				<!-- then we shouodl add mo -->
				<a
					href="https://res.cloudinary.com/kist/image/upload/f_auto,q_auto/o5ta7ywqhtmxt4dtlcqy"
					target="_blank"
				>
					<Button>
						<div class=" flex gap-2">
							<span>My CV</span>
							<!-- <DownloadCloudIcon /> -->
						</div>
					</Button>
				</a>
			</div>
		</div>
		<div class=" md:w-[40%] flex items-center justify-center">
			<img src={myPic} class=" w-[60%]" alt="profile" />
		</div>
	</section>
	<AboutMe />
	<!-- projects -->
	<ProjectIworkedON />
	<!-- Hire me -->
	<HireMe />
	<!-- testmonials -->
	<!-- <Testimonials /> -->
	<!-- <section class="mt-[10vh] lg:mt-[15vh] w-full">
		<div class="mt-[10vh] w-full">
			<h1 class="text-4xl xl:text-6xl font-bold w-fit mx-auto mb-8">Contact me</h1>
			<div class="px-8 py-8 w-full bg-gradient-to-tr rounded-lg">
				<form use:enhance method="post" action="/?/contact" class="max-w-md mx-auto">
					<div class="mb-4">
						<label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Name: </label>
						<input
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
							name="name"
							bind:value={$form.name}
							{...$constraints.name}
						/>
						{#if $errors.name}
							<p class="w-fit italic text-red-500">{$errors?.name}</p>
						{/if}
					</div>

					<div class="mb-4">
						<label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Email: </label>
						<input
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="email"
							name="email"
							bind:value={$form.email}
							required
						/>
						{#if $errors.email}
							<p class="w-fit italic text-red-500">{$errors?.email}</p>
						{/if}
					</div>

					<div class="mb-6">
						<label class="block text-gray-700 text-sm font-bold mb-2" for="message">
							Message:
						</label>
						<textarea
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							name="message"
							bind:value={$form.message}
							rows="4"
							required
						></textarea>
						{#if $errors.message}
							<p class="w-fit italic text-red-500">{$errors?.message}</p>
						{/if}
					</div>
					<div class=" flex justify-between items-center">
						<button
							class="bg-blue-500 hover:bg-blue-700 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Submit
						</button>
						<button
							class="bg-gray-500 hover:bg-gray-700 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="button"
							on:click={clearFrom}
						>
							Clear
						</button>
					</div>
				</form>
			</div>
		</div>
	</section> -->
</div>
