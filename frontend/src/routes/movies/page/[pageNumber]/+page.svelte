<script>
	import MovieCard from '../../../../components/shared/MovieCard.svelte';
	import Page from '../../../../components/shared/Page.svelte';
	import { goto } from '$app/navigation';
	import Button from '../../../../components/shared/Button.svelte';

	export let data;
	$: ({ movies } = data);
	$: currentPage = movies.page;

	const goNext = () => {
		goto(`/movies/page/${currentPage + 1}`);
	};

	const goPrev = () => {
		if (currentPage > 1) {
			goto(`/movies/page/${currentPage - 1}`);
		}
	};

	console.log(data);
</script>

<Page title="Movies">
	<div class="grid grid-cols-2 gap-10 sm:grid-cols-3 xl:grid-cols-4">
		{#each movies.results as movie (movie.id)}
			<MovieCard {movie} />
		{/each}
	</div>
	<div class="flex items-center justify-center gap-6">
		<Button on:click={goPrev}>Previous</Button>
		<div class="text-lg font-bold text-white">Page {currentPage}</div>
		<Button on:click={goNext}>Next</Button>
	</div>
</Page>
