<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import { removeReview } from '../../bleh/reviews';
	import ReviewModal from '../../components/ReviewModal.svelte';
	import Button from '../../components/shared/Button.svelte';
	import Page from '../../components/shared/Page.svelte';
	import Rating from '../../components/shared/Rating.svelte';
	import { ModalStore } from '../../stores/ModalStore';

	$: open = $ModalStore;
	$: reviews = (data?.reviews as App.TReviewWithMovie[]) ?? [];

	console.log(reviews);

	export let data;
	let selectedMovie = {} as App.TMovie;
	let myReview: App.TReview = {
		id: '',
		movieId: 0,
		rating: 0,
		review: ''
	};

	const handleModal = (movie: App.TMovie, review: App.TReview) => {
		selectedMovie = movie;
		myReview = review;
		ModalStore.set(true);
	};

	const handleClose = async () => {
		ModalStore.set(false);
		await invalidateAll();
	};

	const handleRemoveReview = async (reviewId: string) => {
		await removeReview(reviewId);
		await invalidateAll();
	};
</script>

<Page title="Reviews">
	<div class="flex flex-col gap-10">
		{#each reviews as { review, movie }: App.TReviewWithMovie}
			<button
				on:click={(e) => {
					e.stopPropagation();
					goto(`/movies/${movie.id}`);
				}}
				class="z-1 transition ease-in-out hover:scale-[1.05]"
			>
				<div
					class="flex h-[250px] w-full overflow-hidden rounded-2xl border-3 border-white bg-black/75 shadow-2xl backdrop-blur-xs"
				>
					<img
						class="rounded-md rounded-tr-none rounded-br-none border-r-3 border-white object-contain backdrop-blur-xs"
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						alt=""
					/>
					<div class="flex w-full flex-col justify-between p-6 text-white">
						<div class="flex flex-col justify-start">
							<div class="item-center flex justify-between">
								<div class="truncate text-3xl text-ellipsis">{movie.title}</div>
								<Rating rating={review.rating} max={review.rating} readonly />
							</div>
							<div class="flex justify-start text-xl">{review.review}</div>
						</div>
						<div class="flex items-center justify-end gap-4">
							<Button
								on:click={(e) => {
									e.stopPropagation();
									handleModal(movie, review);
								}}>Edit</Button
							>
							<Button
								on:click={(e) => {
									e.stopPropagation();
									handleRemoveReview(review.id);
								}}>Remove</Button
							>
						</div>
					</div>
				</div>
			</button>
		{/each}
	</div>
	{#if open}
		<ReviewModal movie={selectedMovie} {myReview} {handleClose} />
	{/if}
</Page>
