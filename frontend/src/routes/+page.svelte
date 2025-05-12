<script>
	import MovieCard from '../components/shared/MovieCard.svelte';
	import Page from '../components/shared/Page.svelte';
	export let data;
</script>

<Page title="Movies">
	<div class="flex flex-wrap justify-between gap-10">
		{#each data.movies.results as movie}
			<MovieCard {movie} />
		{/each}
	</div>
</Page>
