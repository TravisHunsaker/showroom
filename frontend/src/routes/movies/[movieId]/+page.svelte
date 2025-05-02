<script>
	import ReviewModal from '../../../components/ReviewModal.svelte';

	export let data;
	const { movie } = data;
	let open = false;

	const openModal = () => {
		open = true;
	};
</script>

<div class="relative flex">
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    <div>
	<h1 class="text-2xl font-bold">{movie.title}</h1>
	<p>{movie.overview}</p>
    <button on:click={openModal}>Review</button>
</div>

	{#if open}
		<ReviewModal />
	{/if}
</div>
