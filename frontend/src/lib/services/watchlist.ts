import axios from 'axios';

export const isMovieInWatchlist = async (movieId: string) => {
	try {
		const response = await axios.get(
			`http://localhost:5000/watchlist/isMovieInWatchlist?movieId=${movieId}`
		);

		return response.data;
	} catch (error) {
		throw error;
	}
};

export const addToWatchlist = async (movieId: number) => {
	try {
		const response = await axios.post(`http://localhost:5000/watchlist/addToWatchlist`, {
			movieId
		});

		return response.data;
	} catch (error) {
		throw error;
	}
};

export const removeFromWatchlist = async (movieId: number) => {
	try {
		const response = await axios.delete(
			`http://localhost:5000/watchlist/removeFromWatchlist?movieId=${movieId}`
		);

		return response.data;
	} catch (error) {
		throw error;
	}
};

export const getWatchlist = async () => {
	try {
		const response = await axios.get(`http://localhost:5000/watchlist/getWatchlist`);

		return response.data;
	} catch (error) {
		throw error;
	}
};
