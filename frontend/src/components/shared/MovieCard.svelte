<script>
	export let movie;

	const year = movie.release_date.split('-')[0];
</script>

<a href={`/movies/${movie.id}`} class="z-1 transition ease-in-out hover:scale-[1.05]">
	<div
		class="flex min-h-full w-full flex-col gap-2 rounded-md border-3 border-white bg-white shadow-2xl"
	>
		<img
			class="rounded-md rounded-b-none object-contain"
			src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
			alt=""
		/>
		<div class="flex w-full flex-col px-2 pt-0 pb-2 font-bold">
			<div class="w-full truncate text-ellipsis">{movie.title}</div>
			<div class="h-full">({year})</div>
		</div>
	</div>
</a>
