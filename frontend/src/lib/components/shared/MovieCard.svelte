<script>
	import MoviePoster from './MoviePoster.svelte';

	export let movie;

	const year = movie.release_date.split('-')[0];
</script>

<a href={`/movies/${movie.id}`} class="w-full h-full">
	<div
		class="flex flex-col w-full gap-2 rounded-md border-3 border-white bg-white shadow-2xl"
	>
		<MoviePoster posterPath={movie.poster_path} variant="card" />

		<div class="flex w-full flex-col px-2 pt-0 pb-2 font-bold">
			<div class="w-full truncate text-ellipsis">{movie.title}</div>
			<div>({year ? year : 'Unknown'})</div>
		</div>
	</div>
</a>
