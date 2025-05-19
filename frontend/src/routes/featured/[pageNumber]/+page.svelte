<script>
	import Page from '../../../components/shared/Page.svelte';
	import MovieCard from '../../../components/shared/MovieCard.svelte';
	import { MoviesStore } from '../../../stores/MoviesStore.js';
	import Pagination from '../../../components/Pagination.svelte';

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
