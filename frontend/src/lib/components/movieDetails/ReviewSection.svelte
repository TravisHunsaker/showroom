<script lang="ts">
	import Rating from '$lib/components/movieDetails/Rating.svelte';

	export let myReview;
	let createdAt = '';
	$: if (myReview?.createdAt) {
		createdAt = new Date(myReview.createdAt).toDateString();
	}
</script>

<div class="mt-4 flex flex-col gap-2">
	{#if myReview}
		<div class="flex items-center gap-2">
			<div class="text-lg font-bold sm:text-xl">My Rating</div>
			<div class="font-bold text-[#818182]">•</div>
			<div class="text-md text-[#818182] sm:text-lg">{createdAt}</div>
		</div>
		<Rating rating={myReview.rating} max={myReview.rating} readonly />
		<p class="text-[#818182]">{myReview.review}</p>
	{:else}
		<p class="text-[#818182]">No review yet!</p>
	{/if}
</div>
