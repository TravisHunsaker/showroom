<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { addToWatchlist, removeFromWatchlist } from '../../../bleh/watchlist';
	import MovieDetailsSection from '../../../components/movieDetails/MovieDetailsSection.svelte';
	import ReviewSection from '../../../components/movieDetails/ReviewSection.svelte';
	import ReviewModal from '../../../components/ReviewModal.svelte';
	import Button from '../../../components/shared/Button.svelte';
	import { ModalStore } from '../../../stores/ModalStore';

	export let data: App.TMovieDetailsData;
	const { movie, response, myReview } = data;

	let savedToWatchlist = response.inWatchlist;

	$: open = $ModalStore;

	const handleOpen = async () => {
		ModalStore.set(true);
	};

	const handleClose = async () => {
		ModalStore.set(false);
		await invalidateAll();
	};

	const handleToggleBookmark = async (id: number) => {
		if (savedToWatchlist) {
			await removeFromWatchlist(id);
		} else {
			await addToWatchlist(id);
		}

		savedToWatchlist = !savedToWatchlist;
	};
</script>

<div class="relative flex h-screen items-center justify-center bg-black p-4 text-white sm:p-10">
	<div class="absolute top-4 left-4 z-1 sm:top-10 sm:left-10">
		<Button on:click={() => history.back()} outlined>Back</Button>
	</div>
	<img
		class="absolute z-0 h-full w-full rounded-xl object-cover opacity-50 blur-xs"
		src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
		alt={movie.title}
	/>
	<div class="z-1 flex w-[1000px] gap-10">
		<img
			class="border3 hidden w-[400px] rounded-xl object-contain lg:block"
			src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
			alt={movie.title}
		/>
		<div class="border3 blurredBlack relative flex flex-1 rounded-xl">
			<div class="z-1 flex flex-col justify-between gap-24 p-6">
				<div class="flex flex-col gap-4">
					<MovieDetailsSection {movie} />

					{#if myReview}
						<ReviewSection {myReview} />
					{:else}
						<p class="text-[#818182]">No review yet!</p>
					{/if}
				</div>
				<div class="flex justify-between">
					<Button on:click={handleOpen}>{myReview ? 'Edit' : 'Review'}</Button>
					<button on:click={() => handleToggleBookmark(movie.id)} class="">
						<img
							src={savedToWatchlist ? '/icons/bookmark.svg' : '/icons/bookmarkOutline.svg'}
							alt=""
							class="size-9"
						/>
					</button>
				</div>
			</div>
		</div>
	</div>

	{#if open}
		<ReviewModal {movie} {myReview} {handleClose} />
	{/if}
</div>
