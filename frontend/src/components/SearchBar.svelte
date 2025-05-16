<script>
	import { goto } from '$app/navigation';
	import { getSearchedMovie } from '../bleh/movies';
	import { MoviesStore } from '../stores/MoviesStore';
	import Button from './shared/Button.svelte';

	let title = '';

	const handleSearch = async () => {
		if (!title) return;

		try {
			goto(`/search/${title}/1`);
			// const data = await getSearchedMovie(title, $MoviesStore.page ?? 1);
			// MoviesStore.set(data);
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
		class="border3 blurredBlack w-full rounded-md px-3 py-2 text-white focus:outline-0"
	/>
	<Button on:click={handleSearch}>Search</Button>
</div>
