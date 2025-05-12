import dotenv from 'dotenv';
dotenv.config();



export const getMovie = async (req, res) => {
	try {
		const { movieId } = req.query;

		const tmdbRes = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
		);

		if (!tmdbRes.ok) {
			throw new Error('TMDB fetch failed');
		}

		const movieData = await tmdbRes.json();
		res.status(200).json(movieData); 
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const getMovies = async (req, res) => {
	try {
        const tmdbRes = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
        );

		if (!tmdbRes.ok) {
			throw new Error('TMDB fetch failed');
		}

		const movieData = await tmdbRes.json();
		res.status(200).json(movieData); 
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};