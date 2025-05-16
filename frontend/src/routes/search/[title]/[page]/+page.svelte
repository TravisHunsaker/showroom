<script>
	import MovieCard from '../../../../components/shared/MovieCard.svelte';
	import Page from '../../../../components/shared/Page.svelte';
	import { MoviesStore } from '../../../../stores/MoviesStore';
	import Pagination from '../../../../components/Pagination.svelte';

	export let data;

	$: ({ movies, title } = data);
	$: MoviesStore.set(movies);
</script>

<Page title={`Search "${title}"`}>
	<div class="grid grid-cols-2 gap-10 sm:grid-cols-3 xl:grid-cols-4">
		{#each $MoviesStore.results as movie (movie.id)}
			<MovieCard {movie} />
		{/each}
	</div>
	<Pagination path={`/search/${title}/`} />
</Page>
