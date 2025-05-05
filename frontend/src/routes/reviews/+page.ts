import axios from 'axios';

import { getReviews } from '../../bleh/reviews.js';

const API_KEY = '0f51ece3d9ef17f6ee82430fee1c55cf';

export async function load() {
	try {
		// 1. Get all reviews from your DB
		const myReviews = await getReviews();

		// 2. Get unique movie IDs
		const uniqueMovieIds = [...new Set(myReviews.map((r: any) => r.movieId))];

		// 3. Fetch movie details for each ID
		const movieFetches = uniqueMovieIds.map(async (id) => {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
				);
				return { id, data: response.data };
			} catch (error: any) {
				console.error(`Failed to fetch movie ${id}:`, error.message);
				return { id, data: null };
			}
		});

		const moviesArray = await Promise.all(movieFetches);

		// 4. Create a movie map: { movieId: movieData }
		const movies = {};
		for (const { id, data } of moviesArray) {
			if (data) {
				movies[id] = data as any;
			}
		}
		const reviews = myReviews.map((review: any) => {
			return {
				review,
				movie: movies[review.movieId] || null
			};
		});

		return {
			reviews
		};
	} catch (error) {
		return {
			status: 500,
			error: new Error('Could not load reviews or movies')
		};
	}
}
