<script lang="ts">
	// your script goes here
	export let labelText = '';
	export let errorText: string | undefined = '';
	let className: string = '';
	export { className as class };
</script>

<div
	class="form-control w-full {errorText?.length
		? ' [&>:is(input,textarea)]:border-error '
		: ''} {className}"
>
	<label for="" class="label">
		<span class="label-text capitalize font-semibold">{labelText}</span>
	</label>
	<slot>
		<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
	</slot>
	{#if errorText?.length}
		<label for="" class="label">
			<span class="label-text text-error">{@html errorText}</span>
		</label>
	{/if}
</div>
