<script>
	import Page from '../../components/shared/Page.svelte';
	import MovieCard from '../../components/shared/MovieCard.svelte';

	export let data;
	const movies = data?.movies ?? [];
</script>

<Page title="Watchlist">
	<div class="flex flex-wrap gap-10">
		{#each movies as movie}
			<MovieCard {movie} />
		{/each}
	</div>
</Page>
