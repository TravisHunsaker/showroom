import { writable } from 'svelte/store';

export const MoviesStore = writable<App.TMovies>();
