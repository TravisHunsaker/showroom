import { getMovies } from '../bleh/movies.js';

export async function load() {
	const movies = await getMovies();

	return { movies };
}
