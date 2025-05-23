<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { addToWatchlist, removeFromWatchlist } from '$lib/services/watchlist';
	import MovieDetailsSection from '$lib/components/movieDetails/DetailsSection.svelte';
	import ReviewSection from '$lib/components/movieDetails/ReviewSection.svelte';
	import ReviewModal from '$lib/components/movieDetails/ReviewModal.svelte';
	import Button from '$lib/components/shared/Button.svelte';
	import MoviePoster from '$lib/components/shared/MoviePoster.svelte';
	import { ModalStore } from '$lib/stores/ModalStore';
	import IconButton from '$lib/components/shared/IconButton.svelte';

	export let data: App.TMovieDetailsData;

	$: ({ movie, response, myReview } = data);
	$: open = $ModalStore;
	$: savedToWatchlist = response?.inWatchlist;

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
		class="absolute z-0 h-full w-full object-cover opacity-50 blur-xs"
		src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
		alt={movie.title}
	/>
	<div class="z-1 flex w-[1000px] gap-10">
		<MoviePoster posterPath={movie.poster_path} variant="default" />
		<div class="border3 blurredBlack relative flex flex-1 rounded-xl">
			<div class="z-1 flex w-full flex-col justify-between gap-24 p-6">
				<div class="flex flex-col gap-4">
					<MovieDetailsSection {movie} />
					<ReviewSection {myReview} />
				</div>
				<div class="flex items-center justify-between">
					<Button on:click={handleOpen}>{myReview ? 'Edit' : 'Review'}</Button>
					<IconButton
						on:click={() => handleToggleBookmark(movie.id)}
						iconPath={savedToWatchlist ? '/icons/bookmark.svg' : '/icons/bookmarkOutline.svg'}
					/>
				</div>
			</div>
		</div>
	</div>

	{#if open}
		<ReviewModal {movie} {myReview} {handleClose} />
	{/if}
</div>
