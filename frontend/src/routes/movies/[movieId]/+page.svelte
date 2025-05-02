<script>
	import ReviewModal from '../../../components/ReviewModal.svelte';

	export let data;
	const { movie } = data;
	let open = false;

	console.log(movie);

	const openModal = () => {
		open = true;
	};
</script>

<div class="relative flex h-screen items-center justify-center bg-[#00131C] p-10 text-white">
	<div class="flex w-[1000px] gap-10">
		<img
			class="w-[400px] rounded-xl object-contain"
			src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
			alt={movie.title}
		/>
		<div class="relative flex flex-1">
			<img
				class="absolute h-full w-full rounded-xl object-cover opacity-50"
				src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
				alt={movie.title}
			/>
			<div class="z-1 flex flex-col justify-between p-6">
				<div class="flex flex-col gap-4">
					<h1 class="text-2xl font-bold">{movie.title}</h1>
					<div class="flex gap-2">
						{#each movie.genres as genre}
							<div class="px-4 py-1 rounded-full bg-black/75">{genre.name}</div>
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
