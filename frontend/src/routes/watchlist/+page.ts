import axios from 'axios';

import { getWatchlist } from '../../bleh/watchlist';
import { getMovie } from '../../bleh/movies';

const API_KEY = '0f51ece3d9ef17f6ee82430fee1c55cf';

export async function load() {
	try {
		// 1. Get all watchlist entries
		const watchlist = await getWatchlist();

		// 2. Extract unique movie IDs
		const uniqueMovieIds = [...new Set(watchlist.map((entry: App.TReview) => entry.movieId))];

		// 3. Fetch movie details for each ID
		const movieFetches = uniqueMovieIds.map(async (id: any) => {
			try {
				// const { data } = await getMovie(id);
				const response = await axios.get(
					`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
				);
				return response.data;
			} catch (error) {
				console.error(`Failed to fetch movie ${id}:`, error);
				return null;
			}
		});

		const movies = (await Promise.all(movieFetches)).filter((movie) => movie !== null);

		return {
			movies
		};
	} catch (error) {
		console.error('Failed to load movies:', error);
		return {
			status: 500,
			error: new Error('Could not load watchlist movies')
		};
	}
}
