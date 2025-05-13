<script lang="ts">
	import Rating from '../shared/Rating.svelte';

	export let myReview;
	let createdAt = '';
	$: if (myReview?.createdAt) {
		createdAt = new Date(myReview.createdAt).toDateString();
	}
</script>

<div class="mt-4 flex flex-col gap-2">
	<div class="flex items-center gap-2">
		<div class="text-xl font-bold">My Rating</div>
		<div class="font-bold text-[#818182]">•</div>
		<div class="text-lg text-[#818182]">{createdAt}</div>
	</div>
	<Rating rating={myReview.rating} max={myReview.rating} readonly />
	<p class="text-[#818182]">{myReview.review}</p>
</div>
