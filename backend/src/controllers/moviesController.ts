import { Response, Request } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.TMDB_API_KEY;

export const getMovie = async (req: Request, res: Response) => {
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
	} catch (err: unknown) {
		console.error('Error fetching movie:', err);
		res.status(500).json({ error: 'Internal server error' });
	}
};

export const getMovies = async (req: Request, res: Response) => {
	const { page } = req.query;
	try {
		const tmdbRes = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
		);

		if (!tmdbRes.ok) {
			throw new Error('TMDB fetch failed');
		}

		const movieData = await tmdbRes.json();
		movieData.results = movieData.results.filter(
			(movie: any) => movie.poster_path
		);

		res.status(200).json(movieData);
	} catch (err: unknown) {
		console.error('Error fetching movies:', err);
		res.status(500).json({ error: 'Internal server error' });
	}
};

export const getSearchedMovie = async (req: Request, res: Response) => {
	const { title, page } = req.query;
	try {
		const tmdbRes = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}&page=${page}`
		);

		if (!tmdbRes.ok) {
			throw new Error('TMDB fetch failed');
		}

		const movieData = await tmdbRes.json();
		movieData.results = movieData.results.filter(
			(movie: any) => movie.poster_path
		);

		res.status(200).json(movieData);
	} catch (err: unknown) {
		console.error('Error fetching movies:', err);
		res.status(500).json({ error: 'Internal server error' });
	}
};
