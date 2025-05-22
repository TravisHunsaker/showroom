<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { ModalStore } from '$lib/stores/ModalStore';
	import Page from '$lib/components/shared/Page.svelte';
	import Review from '$lib/components/reviews/Review.svelte';
	import ReviewModal from '$lib/components/movieDetails/ReviewModal.svelte';

	export let data: { reviews: App.TReviewWithMovie[] };

	$: open = $ModalStore;
	$: reviews = data?.reviews ?? [];

	let selectedMovie = {} as App.TMovie;
	let myReview: App.TReview = {
		id: '',
		createdAt: '',
		movieId: 0,
		rating: 0,
		review: ''
	};

	const handleModal = (e: Event, movie: App.TMovie, review: App.TReview) => {
		e.preventDefault();
		selectedMovie = movie;
		myReview = review;
		ModalStore.set(true);
	};

	const handleClose = async () => {
		ModalStore.set(false);
		await invalidateAll();
	};
</script>

<Page title="Reviews">
	<div class="flex flex-col gap-6">
		{#each reviews as { review, movie }}
			<Review {review} {movie} {handleModal} />
		{/each}
	</div>
	{#if open}
		<ReviewModal movie={selectedMovie} {myReview} {handleClose} />
	{/if}
</Page>
