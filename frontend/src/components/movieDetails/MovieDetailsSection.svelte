<script lang="ts">
	import { addToWatchlist, removeFromWatchlist } from "../../bleh/watchlist";
	import MovieGenres from "../MovieGenres.svelte";

    export let movie: App.TMovie
    export let savedToWatchlist: boolean

    const handleToggleBookmark = async (id: number) => {
		if (savedToWatchlist) {
			await removeFromWatchlist(id);
		} else {
			await addToWatchlist(id);
		}

		savedToWatchlist = !savedToWatchlist;
	};

</script>


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
<MovieGenres genres={movie.genres} />

<p>{movie.overview}</p>