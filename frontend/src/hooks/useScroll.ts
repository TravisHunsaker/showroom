import { writable } from 'svelte/store';
import { onMount } from 'svelte';

export function useScroll(threshold = 10) {
	const scrolled = writable(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled.set(window.scrollY > threshold);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	});

	return scrolled;
}
