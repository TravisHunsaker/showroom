<script>
	import NavBar from '../../../components/NavBar.svelte';
	import ReviewModal from '../../../components/ReviewModal.svelte';

	export let data;
	const { movie } = data;
	let open = false;

	console.log(movie);

	const openModal = () => {
		open = true;
	};
</script>

<div class="relative flex h-screen items-center justify-center bg-black p-10 text-white">
    <NavBar />
    <img
        class="absolute h-full w-full rounded-xl object-cover opacity-50 z-0 blur-xs"
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
    />
	<div class="flex w-[1000px] gap-10 z-1">
		<img
			class="w-[400px] rounded-xl object-contain border-white border-3"
			src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
			alt={movie.title}
		/>
		<div class="relative flex flex-1 border-white border-3 rounded-xl bg-black/50 backdrop-blur-xs">
			<div class="z-1 flex flex-col justify-between p-6">
				<div class="flex flex-col gap-4">
					<h1 class="text-2xl font-bold">{movie.title}</h1>
					<div class="flex gap-2">
						{#each movie.genres as genre}
							<div class="px-4 py-1 rounded-full bg-white/25 font-bold backdrop-blur-xs">{genre.name}</div>
						{/each}
					</div>
					<p>{movie.overview}</p>
				</div>
				<button on:click={openModal}>Review</button>
			</div>
		</div>
	</div>

	{#if open}
		<ReviewModal />
	{/if}
</div>
