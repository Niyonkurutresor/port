<!-- <script lang="ts">
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	export let form;
	export let errors;
	export let enhance;
	export let constraints;
	export let reset;
</script>

<section class="mt-[10vh] lg:mt-[15vh] w-full" id="contact">
	<div class="mt-[10vh] w-full">
		<h1 class="text-4xl xl:text-6xl font-bold w-fit mx-auto mb-8">Contact me</h1>
		<div class="px-8 py-8 w-full bg-gradient-to-tr rounded-lg">
			<SuperDebug data={$form} />
			<form use:enhance method="post" action="/?/contact" class="max-w-md mx-auto">
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Name: </label>
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						name="name"
						bind:value={form.name}
						{...$constraints.name}
					/>
					{#if errors && 'nameError' in errors}
						<p class="w-fit italic text-red-500">{errors?.nameError}</p>
					{/if}
				</div>

				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Email: </label>
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="email"
						name="email"
						bind:value={form.email}
						required
					/>
					{#if errors && 'emailError' in errors}
						<p class="w-fit italic text-red-500">{errors?.emailError}</p>
					{/if}
				</div>

				<div class="mb-6">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="message"> Message: </label>
					<textarea
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						name="message"
						bind:value={form.message}
						rows="4"
						required
					></textarea>
					{#if errors && 'messageError' in errors}
						<p class="w-fit italic text-red-500">{errors?.nameError}</p>
					{/if}
				</div>

				<button
					class="bg-blue-500 hover:bg-blue-700 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	</div>
</section> -->
