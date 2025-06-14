import axios from 'axios';

export const addReview = async (reviewData: {
	movieId: number;
	rating: number;
	review: string;
}) => {
	try {
		const response = await axios.post(`http://localhost:5000/reviews/addReview`, reviewData);

		return response.data;
	} catch (error) {
		throw error;
	}
};

export const updateReview = async (reviewData: {
	movieId: number;
	rating: number;
	review: string;
}) => {
	try {
		const response = await axios.post(`http://localhost:5000/reviews/updateReview`, reviewData);

		return response.data;
	} catch (error) {
		throw error;
	}
};

export const getReviews = async () => {
	try {
		const response = await axios.get(`http://localhost:5000/reviews/getReviews`);

		return response.data;
	} catch (error) {
		throw error;
	}
};

export const getReview = async (movieId: string) => {
	try {
		const response = await axios.get(`http://localhost:5000/reviews/getReview?movieId=${movieId}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const removeReview = async (reviewId: string) => {
	try {
		const response = await axios.delete(
			`http://localhost:5000/reviews/removeReview?reviewId=${reviewId}`
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};
