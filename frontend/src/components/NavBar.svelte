<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 10;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	let scrolled = false;
	const changeCurrentTab = (path: string) => {
		goto(path);
	};

	const tabs = [
		{ path: '/', value: 'movies', text: 'Movies', id: '1' },
		{ path: '/watchlist', value: 'watchlist', text: 'Watchlist', id: '2' },
		{ path: '/reviews', value: 'reviews', text: 'Reviews', id: '3' }
	];
</script>

<div class="fixed top-0 z-2 flex w-full gap-6 p-10 font-bold text-white">
	<div
		class={`flex w-full  items-center justify-between rounded-xl px-6 py-4 transition-all duration-300 ease-in-out ${
			scrolled ? 'bg-white/25 backdrop-blur-sm' : ''
		}`}
	>
		<div class="text-2xl">SHOWROOM</div>
		<div class="flex items-center gap-6 text-xl">
			{#each tabs as tab (tab.id)}
				<a
					href={tab.path}
					on:click|preventDefault={() => changeCurrentTab(tab.path)}
					class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
				>
					{tab.text}
				</a>
			{/each}
		</div>
	</div>
</div>
