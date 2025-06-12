import { getSearchedMovie } from '../../../../lib/services/movies';

export async function load({ params }) {
	const title = params.title;
	const page = Number(params.page);
	const movies = await getSearchedMovie(title, page);

	return { movies, title, page };
}
