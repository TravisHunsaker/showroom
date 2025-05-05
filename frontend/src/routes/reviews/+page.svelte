<script>
	import NavBar from '../../components/NavBar.svelte';
	
	export let data;
	const reviews = data?.reviews ?? [];
</script>

<div class="h-screen w-full bg-black text-white">
	<NavBar />
	{#each reviews as review}
		<div>{review.review.rating}</div>
		<div>{review.movie.title}</div>
	{/each}
</div>
