<script>
	import MovieCard from '../../../../components/shared/MovieCard.svelte';
	import Page from '../../../../components/shared/Page.svelte';
	import { goto } from '$app/navigation';
	import Button from '../../../../components/shared/Button.svelte';
	import { MoviesStore } from '../../../../stores/MoviesStore';

	export let data;

	$: ({ movies, title } = data);
	$: MoviesStore.set(movies);

	const goNext = () => {
		goto(`/search/${title}/${$MoviesStore.page + 1}`);
	};

	const goPrev = () => {
		if ($MoviesStore.page > 1) {
			goto(`/search/${title}/${$MoviesStore.page - 1}`);
		}
	};

	console.log(data);
</script>

<Page title="Movies">
	<div class="grid grid-cols-2 gap-10 sm:grid-cols-3 xl:grid-cols-4">
		{#each $MoviesStore.results as movie (movie.id)}
			<MovieCard {movie} />
		{/each}
	</div>
	<div class="flex items-center justify-center gap-6">
		<Button on:click={goPrev}>Previous</Button>
		<div class="text-lg font-bold text-white">Page {$MoviesStore.page}</div>
		<Button on:click={goNext}>Next</Button>
	</div>
</Page>
