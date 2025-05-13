<script>
	import MovieCard from '../components/shared/MovieCard.svelte';
	import Page from '../components/shared/Page.svelte';
	export let data;
</script>

<Page title="Movies">
	<div class="grid grid-cols-2 gap-10 sm:grid-cols-3 xl:grid-cols-4">
		{#each data.movies.results as movie}
			<MovieCard {movie} />
		{/each}
	</div>
</Page>
