import { getMovie } from '../../../bleh/movies';
import { getReview } from '../../../bleh/reviews';
import { isMovieInWatchlist } from '../../../bleh/watchlist';

export async function load({ params }) {
	const movieId = params.movieId;

	const response = await isMovieInWatchlist(movieId);
	const myReview = await getReview(movieId);
	const movie = await getMovie(movieId);

	if (!movie) {
		return {
			status: 500,
			error: new Error('Could not fetch movie')
		};
	}

	return { movie, response, myReview };
}
