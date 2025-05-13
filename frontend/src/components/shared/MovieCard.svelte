<script>
	export let movie;

	const year = movie.release_date.split('-')[0];
</script>

<a href={`/movies/${movie.id}`} class="z-1 transition ease-in-out hover:scale-[1.05]">
	<div class="flex w-[300px] flex-col gap-2 rounded-md border-3 border-white bg-white shadow-2xl">
		<img
			class="h-[441px] rounded-md rounded-b-none object-contain backdrop-blur-xs"
			src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
			alt=""
		/>
		<div class="flex items-center gap-1 p-2 font-bold">
			<div class="truncate text-ellipsis">{movie.title}</div>
			<div class="h-full">({year})</div>
		</div>
	</div>
</a>
