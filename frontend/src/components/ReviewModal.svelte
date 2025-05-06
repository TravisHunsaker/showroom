<script lang="ts">
	import { fade } from 'svelte/transition';
	import Button from './shared/Button.svelte';
	import { addReview } from '../bleh/reviews';
	export let handleClose: () => void;
	export let movie: any;

	console.log(movie)

	let rating = 0;
	let review = '';
	const maxStars = 5;
	const date = new Date().toDateString();

	const setRating = (index: number) => {
		rating = index;
	};

	const handleSave = async () => {
		const reviewData = { movieId: movie.id, rating, review };
		try {
			await addReview(reviewData);
			console.log('Review saved successfully');
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
		class=" flex h-[500px] w-[500px] flex-col gap-4 rounded-xl border-3 border-white bg-black/75 p-6 opacity-100 backdrop-blur-xs"
	>
		<div class="flex gap-4">
			<img
				class="w-[150px] rounded-xl object-contain"
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt={movie.title}
			/>
			<div class="flex flex-col gap-4">
				<div class="text-2xl">{movie.title}</div>
				<div>
					<div>Rate</div>
					<div class="flex space-x-1">
						{#each Array(maxStars).fill(0) as _, i (i)}
							<button on:click={() => setRating(i + 1)}>
								<img
									src={'/icons/star.svg'}
									alt="Star"
									class="size-10 cursor-pointer transition-transform hover:scale-110"
									class:opacity-100={i < rating}
									class:opacity-30={i >= rating}
								/>
							</button>
						{/each}
					</div>
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
		<div class="flex justify-end gap-4">
			<Button on:click={handleSave}>Save</Button>
			<Button on:click={handleClose}>Cancel</Button>
		</div>
	</div>
</div>
