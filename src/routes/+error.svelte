<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>error accured.</h1>
<div class=" flex gap-3 items-center my-4">
	<h1 class=" text-xl font-bold">{$page.status}:</h1>
	<p>{$page.error?.message}</p>
</div>
{#if $page.status === 500}
	<p>
		something went wronge, try again to check is it resolved. <br /> or try to caontact support team
		for further help
	</p>
{/if}
{#if $page.status === 404}
	<p>Resources you are trying to access not found. Please contact support team.</p>
	<a href="/" class=" bg-green-500 px-3 py-1 my-4"> something </a>
{/if}
{#if $page.status === 403}
	<p>You are not allowed to access requested resources. Please contact support team.</p>
{/if}
