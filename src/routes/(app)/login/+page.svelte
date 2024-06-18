<!-- <script lang="ts">
	import { loginSchema } from '$lib/schema/loginSchema';
	import { zod } from 'sveltekit-superforms/adapters';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from '../$types';
	export let data: PageData;
	const { form, errors, enhance, constraints, reset } = superForm(data.form, {
		taintedMessage: 'Your data are not saved.',
		validators: zod(loginSchema),

		onSubmit: () => {
			console.log('the data are submited.');
		},

		onError: () => {
			console.log('somethign went wrong with the form. Try again');
		}
	});
</script>

<section class=" h-full w-full">
	<form
		method="post"
		action="/login/?/login"
		use:enhance
		class="max-w-md mx-auto my-auto shadow-md py-4 px-3"
	>
		<div class="mb-4">
			<label class="block text-gray-600 text-sm font-bold mb-2" for="email"> Email: </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
				type="email"
				name="email"
				bind:value={$form.email}
				required
				{...$constraints.email}
			/>
			{#if $errors.email}
				<p class="w-fit italic text-red-500">{$errors?.email}</p>
			{/if}
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Password: </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
				type="password"
				name="password"
				bind:value={$form.passwordd}
				required
			/>
			{#if $errors.email}
				<p class="w-fit italic text-red-500">{$errors?.email}</p>
			{/if}
		</div>
	</form>
</section> -->
