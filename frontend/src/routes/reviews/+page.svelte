<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import { removeReview } from '$lib/services/reviews';
	import ReviewModal from '$lib/components/movieDetails/ReviewModal.svelte';
	import Button from '$lib/components/shared/Button.svelte';
	import MoviePoster from '$lib/components/shared/MoviePoster.svelte';
	import Page from '$lib/components/shared/Page.svelte';
	import Rating from '$lib/components/shared/Rating.svelte';
	import { ModalStore } from '../../stores/ModalStore';

	$: open = $ModalStore;
	$: reviews = (data?.reviews as App.TReviewWithMovie[]) ?? [];

	console.log(reviews);

	export let data;
	let selectedMovie = {} as App.TMovie;
	let myReview: App.TReview = {
		id: '',
		createdAt: '',
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
	<div class="flex flex-col gap-6">
		{#each reviews as { review, movie }: App.TReviewWithMovie}
			<button
				on:click={(e) => {
					e.stopPropagation();
					goto(`/movies/${movie.id}`);
				}}
				class="z-1 transition ease-in-out hover:scale-[1.05]"
			>
				<div
					class="border3 blurredBlack flex h-[250px] w-full gap-4 overflow-hidden rounded-2xl p-4 shadow-2xl md:h-[250px] md:gap-0 md:p-0 lg:h-[250px]"
				>
					<MoviePoster posterPath={movie.poster_path} variant="side" />

					<div class="flex w-full flex-col justify-between text-white md:p-4 lg:p-6">
						<div class="flex flex-col justify-start gap-2">
							<div
								class="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between sm:gap-2"
							>
								<div class="truncate text-xl text-ellipsis md:text-3xl">{movie.title}</div>
								<Rating rating={review.rating} max={review.rating} readonly />
							</div>
							<div class="flex justify-start text-base text-[#818182] lg:text-xl">
								{review.review}
							</div>
						</div>
						<div class="flex items-center justify-end">
							<div class="flex w-full items-center gap-4 md:w-1/2 md:max-w-[300px]">
								<Button
									on:click={(e) => {
										e.stopPropagation();
										handleModal(movie, review);
									}}>Edit</Button
								>
								<Button
									outlined={true}
									on:click={(e) => {
										e.stopPropagation();
										handleRemoveReview(review.id);
									}}>Remove</Button
								>
							</div>
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
