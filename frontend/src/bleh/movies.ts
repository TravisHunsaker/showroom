import axios from 'axios';

export const getMovie = async (movieId: string) => {
	try {
		const response = await axios.get(`http://localhost:5000/movies/getMovie?movieId=${movieId}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const getMovies = async () => {
	try {
		const response = await axios.get(`http://localhost:5000/movies/getMovies`);
		return response.data;
	} catch (error) {
		throw error;
	}
};
