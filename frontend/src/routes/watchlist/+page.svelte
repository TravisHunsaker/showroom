<script>
	import Page from '../../components/shared/Page.svelte';
	import MovieCard from '../../components/shared/MovieCard.svelte';

	export let data;
	const movies = data?.movies ?? [];
</script>

<Page title="Watchlist">
	<div class="grid grid-cols-2 gap-10 sm:grid-cols-3 xl:grid-cols-4">
		{#each movies as movie}
			<MovieCard {movie} />
		{/each}
	</div>
</Page>
