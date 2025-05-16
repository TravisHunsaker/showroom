<script>
	import { goto } from '$app/navigation';
	import { MoviesStore } from '../stores/MoviesStore';
	import Button from './shared/Button.svelte';

	export let path;
</script>

<div class="flex items-center justify-between">
	<div class="font-bold text-white">Page {$MoviesStore.page} of {$MoviesStore.total_pages}</div>
	<div class="flex items-center gap-4">
		<Button
			on:click={() => goto(`${path}${$MoviesStore.page - 1}`)}
			outlined
			disabled={$MoviesStore.page === 1}>Prev</Button
		>
		<Button
			on:click={() => goto(`${path}${$MoviesStore.page + 1}`)}
			outlined
			disabled={$MoviesStore.page === $MoviesStore.total_pages}>Next</Button
		>
	</div>
</div>
