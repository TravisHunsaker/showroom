export async function load({ params, fetch }) {
	const movieId = params.movieId;

	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${movieId}?api_key=0f51ece3d9ef17f6ee82430fee1c55cf&language=en-US`
	);

	if (!res.ok) {
		return {
			status: res.status,
			error: new Error('Could not fetch movie')
		};
	}

	const movie = await res.json();
	return { movie };
}
