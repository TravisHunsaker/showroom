<script>
	import Page from '$lib/components/shared/Page.svelte';
	import MovieCard from '$lib/components/shared/MovieCard.svelte';
	import { MoviesStore } from '$lib/stores/MoviesStore';
	import Pagination from '$lib/components/home/Pagination.svelte';

	export let data;
	$: ({ movies } = data);
	$: MoviesStore.set(movies);
</script>

<Page title="Featured">
	<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-10 xl:grid-cols-4">
		{#each $MoviesStore.results as movie (movie.id)}
			<MovieCard {movie} />
		{/each}
	</div>
	<Pagination path={'/featured/'} />
</Page>
