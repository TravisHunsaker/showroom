import axios from 'axios';

export const getMovie = async (movieId: number) => {
	try {
		const response = await axios.get(`http://localhost:5000/movies/getMovie?movieId=${movieId}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const getMovies = async (pageNumber: number) => {
	try {
		const response = await axios.get(
			`http://localhost:5000/movies/getMovies?pageNumber=${pageNumber}`
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};
