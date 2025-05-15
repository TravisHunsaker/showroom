import { getMovies } from '../../../../bleh/movies';

export async function load({ params }) {
	const pageNumber = Number(params.pageNumber);
	const movies = await getMovies(pageNumber);

	return { movies };
}
