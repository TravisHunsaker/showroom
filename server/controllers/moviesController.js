import dotenv from 'dotenv';
dotenv.config();


const API_KEY = process.env.TMDB_API_KEY


export const getMovie = async (req, res) => {
	try {
		const { movieId } = req.query;

		const tmdbRes = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
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
	const { page } = req.query;
	try {
        const tmdbRes = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
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

export const getSearchedMovie = async (req, res) => {
	const { title, page } = req.query;
	try {
        const tmdbRes = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}&page=${page}`
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

// export const getMovies = async (req, res) => {
// 	const { title, page = 1 } = req.query;

// 	try {
// 		const baseUrl = title
// 			? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}&page=${page}`
// 			: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

// 		const tmdbRes = await fetch(baseUrl);

// 		if (!tmdbRes.ok) {
// 			throw new Error('TMDB fetch failed');
// 		}

// 		const movieData = await tmdbRes.json();
// 		console.log(movieData);

// 		res.status(200).json(movieData);
// 	} catch (err) {
// 		res.status(500).json({ error: err.message });
// 	}
// };