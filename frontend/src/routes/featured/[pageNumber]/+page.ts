import { getMovies } from '../../../lib/services/movies.js';

export async function load({ params }) {
	const pageNumber = Number(params.pageNumber);
	const movies = await getMovies(pageNumber);

	return { movies };
}
