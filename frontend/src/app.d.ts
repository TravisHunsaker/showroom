// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface TReview {
			id: string;
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

		interface TMovie {
			id: number;
			title: string;
			overview: string;
			backdrop_path: string;
			poster_path: string;
			release_date: string;
			genre: TGenre[];
		}
	}
}

export { TReview, TMovie, TReviewWithMovie };
