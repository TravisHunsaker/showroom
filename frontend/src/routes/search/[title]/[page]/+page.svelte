<script>
	import MovieCard from '$lib/components/shared/MovieCard.svelte';
	import Page from '$lib/components/shared/Page.svelte';
	import Pagination from '$lib/components/home/Pagination.svelte';
	import { MoviesStore } from '../../../../stores/MoviesStore';

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
