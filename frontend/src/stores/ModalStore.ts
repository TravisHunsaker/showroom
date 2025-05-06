import { writable } from 'svelte/store';

export const ModalStore = writable<boolean>(false);
