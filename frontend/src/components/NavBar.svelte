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
		{ path: '/featured/1', value: 'featured', text: 'Featured', id: '1' },
		{ path: '/watchlist', value: 'watchlist', text: 'Watchlist', id: '2' },
		{ path: '/reviews', value: 'reviews', text: 'Reviews', id: '3' }
	];
</script>

<div class="fixed top-0 z-2 flex w-full gap-6 p-4 font-bold text-white sm:p-10">
	<div
		class={`flex w-full items-center justify-between gap-2 rounded-xl px-4 py-4 transition-all duration-300 ease-in-out ${
			scrolled ? 'bg-gray-500/50 backdrop-blur-sm' : ''
		}`}
	>
		<div class="flex items-center gap-2">
			<img src={'/icons/logo.svg'} alt="" class="size-9" />
			<div class="hidden text-4xl md:block">SHOWROOM</div>
		</div>
		<div class="xs:text-md flex items-center gap-4 sm:gap-6 sm:text-xl">
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
