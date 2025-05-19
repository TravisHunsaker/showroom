<script lang="ts">
	import MovieGenres from '../MovieGenres.svelte';
	import MoviePoster from '../shared/MoviePoster.svelte';

	export let movie: App.TMovie;
</script>

<div>
	<div class="flex justify-start gap-2">
		<MoviePoster posterPath={movie.poster_path} variant="details" />
		<div class="flex w-full flex-col gap-2 lg:gap-4">
			<h1 class="text-xl font-bold lg:text-3xl">{movie.title}</h1>

			<MovieGenres genres={movie.genres} />
		</div>
	</div>
</div>

<p>{movie.overview}</p>
