<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { removeReview } from '$lib/services/reviews';
	import Rating from '../movieDetails/Rating.svelte';
	import Button from '../shared/Button.svelte';
	import MoviePoster from '../shared/MoviePoster.svelte';

	export let movie;
	export let review;
	export let handleModal: (e: Event, movie: App.TMovie, review: App.TReview) => void;

	const handleRemoveReview = async (e: Event, reviewId: string) => {
		e.preventDefault();
		await removeReview(reviewId);
		await invalidateAll();
	};
</script>

<a href={`/movies/${movie.id}`}>
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
				<div class="flex w-full items-center justify-end gap-4">
					<Button on:click={(e) => handleModal(e, movie, review)}>Edit</Button>
					<Button outlined on:click={(e) => handleRemoveReview(e, review.id)}>Remove</Button>
				</div>
			</div>
		</div>
	</div>
</a>
