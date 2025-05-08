<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { addToWatchlist, removeFromWatchlist } from '../../../bleh/watchlist';
	import ReviewModal from '../../../components/ReviewModal.svelte';
	import Button from '../../../components/shared/Button.svelte';
	import Rating from '../../../components/shared/Rating.svelte';
	import { ModalStore } from '../../../stores/ModalStore';

	export let data;
	const { movie, response } = data;
	let savedToWatchlist = response.inWatchlist;

	$: open = $ModalStore;
	$: myReview = data.myReview;

	const handleToggleBookmark = async (id: string) => {
		if (savedToWatchlist) {
			await removeFromWatchlist(id);
		} else {
			await addToWatchlist(id);
		}

		savedToWatchlist = !savedToWatchlist;
	};

	const handleOpen = async () => {
		ModalStore.set(true);
	};

	const handleClose = async () => {
		ModalStore.set(false);
		await invalidateAll();
	};
</script>

<div class="relative flex h-screen items-center justify-center bg-black p-10 text-white">
	<div class="absolute top-10 left-10 z-1">
		<Button on:click={() => history.back()}>Back</Button>
	</div>
	<img
		class="absolute z-0 h-full w-full rounded-xl object-cover opacity-50 blur-xs"
		src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
		alt={movie.title}
	/>
	<div class="z-1 flex w-[1000px] gap-10">
		<img
			class="w-[400px] rounded-xl border-3 border-white object-contain"
			src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
			alt={movie.title}
		/>
		<div class="relative flex flex-1 rounded-xl border-3 border-white bg-black/75 backdrop-blur-xs">
			<div class="z-1 flex flex-col justify-between p-6">
				<div class="flex flex-col gap-4">
					<div class="flex items-center justify-between">
						<h1 class="text-3xl font-bold">{movie.title}</h1>
						<button on:click={() => handleToggleBookmark(movie.id)}>
							<img
								src={savedToWatchlist ? '/icons/bookmark.svg' : '/icons/bookmarkOutline.svg'}
								alt=""
								class="size-9"
							/>
						</button>
					</div>
					<div class="flex gap-2">
						{#each movie.genres as genre}
							<div class="rounded-full bg-white/25 px-4 py-1 font-bold backdrop-blur-xs">
								{genre.name}
							</div>
						{/each}
					</div>
					<p>{movie.overview}</p>
					{#if myReview.review}
						<Rating rating={myReview.rating} max={myReview.rating} readonly />
						<p>{myReview.review}</p>
					{:else}
						<p>No review yet!</p>
					{/if}
				</div>
				<div class="flex justify-end">
					<Button on:click={handleOpen}>{myReview ? 'Edit' : 'Review'}</Button>
				</div>
			</div>
		</div>
	</div>

	{#if open}
		<ReviewModal {movie} {myReview} {handleClose} />
	{/if}
</div>
