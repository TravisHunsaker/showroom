<script>
	import { goto } from '$app/navigation';
	import Button from '../shared/Button.svelte';

	let title = '';

	const handleSearch = async () => {
		if (!title) return;

		try {
			goto(`/search/${title}/1`);
		} catch (error) {
			console.error('Search failed:', error);
		}
	};
</script>

<div class="flex items-center gap-4">
	<input
		type="text"
		placeholder="Search title"
		bind:value={title}
		class="border3 blurredBlack w-full rounded-md px-4 py-2 text-sm text-white focus:outline-0 sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg"
	/>
	<Button on:click={handleSearch}>Search</Button>
</div>
