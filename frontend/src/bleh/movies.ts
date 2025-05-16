import axios from 'axios';

export const getMovie = async (movieId: number) => {
	try {
		const response = await axios.get(`http://localhost:5000/movies/getMovie?movieId=${movieId}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const getMovies = async (page: number) => {
	try {
		const response = await axios.get(`http://localhost:5000/movies/getMovies?page=${page}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const getSearchedMovie = async (title: string, page: number) => {
	try {
		const response = await axios.get(
			`http://localhost:5000/movies/getSearchedMovie?title=${encodeURIComponent(title)}&page=${page}`
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};
