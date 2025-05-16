// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface TReview {
			id: string;
			createdAt: string;
			movieId: number;
			review: string;
			rating: number;
		}

		interface TReviewWithMovie {
			id: string;
			review: TReview;
			movie: TMovie;
		}

		interface TGenre {
			id: number;
			name: string;
		}

		interface TMovieDetailsData {
			movie: TMovie;
			response: any;
			myReview?: TReview;
		}

		interface TMovie {
			id: number;
			title: string;
			overview: string;
			backdrop_path: string;
			poster_path: string;
			release_date: string;
			genres: TGenre[];
		}

		interface TMovies {
			page: number;
			results: TMovie[];
		}
	}
}

export { TReview, TMovie, TMovies, TReviewWithMovie };
