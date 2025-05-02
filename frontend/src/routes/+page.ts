export async function load({ fetch }) {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=0f51ece3d9ef17f6ee82430fee1c55cf&language=en-US&page=1`
	);
	const items = await res.json();

	return { items };
}
