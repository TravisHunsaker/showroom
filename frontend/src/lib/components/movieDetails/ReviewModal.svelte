<script lang="ts">
	import { fade } from 'svelte/transition';
	import Button from '../shared/Button.svelte';
	import { addReview, updateReview } from '../../services/reviews';
	import { onMount } from 'svelte';
	import Rating from './Rating.svelte';
	import MoviePoster from '../shared/MoviePoster.svelte';

	export let handleClose: () => void;
	export let movie: App.TMovie;
	export let myReview: App.TReview | null | undefined = null;

	let rating = 0;
	let review = '';
	const date = new Date().toDateString();

	onMount(() => {
		if (myReview) {
			rating = myReview.rating;
			review = myReview.review;
		}
	});

	const setRating = (index: number) => {
		rating = index;
	};

	const handleSave = async () => {
		const reviewData = { movieId: movie.id, rating, review };
		try {
			if (myReview) {
				await updateReview(reviewData);
			} else {
				await addReview(reviewData);
			}
			handleClose();
		} catch (error) {
			console.error('Error saving review:', error);
		}
	};
</script>

<div
	transition:fade={{ duration: 150 }}
	class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 font-bold text-white"
>
	<div
		class="blurredBlack flex h-full w-full flex-col justify-between gap-4 rounded-xl p-6 opacity-100 md:h-[575px] md:w-[575px] md:border-3 md:border-white"
	>
		<div class="flex flex-col gap-4">
			<div class="flex gap-4">
				<MoviePoster posterPath={movie.poster_path} variant="modal" />
				<div class="flex flex-col gap-4">
					<div class="text-2xl">{movie.title}</div>
					<div>
						<div>Rate</div>
						<Rating {rating} max={5} onRate={(val: number) => setRating(val)} />
					</div>
					<div>
						<div>Date</div>
						<div>{date}</div>
					</div>
				</div>
			</div>
			<textarea
				placeholder="Add review"
				class="w-full resize-none focus:outline-none"
				rows={6}
				bind:value={review}
			></textarea>
		</div>
		<div class="flex justify-end gap-4">
			<Button on:click={handleSave} fullWidth>Save</Button>
			<Button on:click={handleClose} outlined fullWidth>Cancel</Button>
		</div>
	</div>
</div>
