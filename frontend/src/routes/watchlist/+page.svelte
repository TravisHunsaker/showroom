<script>
	import Page from '$lib/components/shared/Page.svelte';
	import MovieCard from '$lib/components/shared/MovieCard.svelte';

	export let data;
	const movies = data?.movies ?? [];
</script>

<Page title="Watchlist">
	<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-10 xl:grid-cols-4">
		{#each movies as movie}
			<MovieCard {movie} />
		{/each}
	</div>
</Page>
