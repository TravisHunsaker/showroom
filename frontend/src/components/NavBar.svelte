<script lang="ts">
	import { goto } from '$app/navigation';

	const tabs = [
		{ path: '/', value: 'movies', text: 'Movies', id: '1' },
		{ path: '/watchlist', value: 'watchlist', text: 'Watchlist', id: '2' },
		{ path: '/reviews', value: 'reviews', text: 'Reviews', id: '3' }
	];

	const changeCurrentTab = (path: string) => {
		goto(path);
	};
</script>

<div
	class="fixed z-1 flex h-full w-full items-start justify-end gap-6 pl-10 font-bold text-white lg:flex-col lg:justify-center"
>
	<div class="text-2xl">SHOWROOM</div>
	{#each tabs as tab (tab.id)}
		<div class="flex items-center gap-4 text-xl">
			<a
				href={tab.path}
				on:click|preventDefault={() => changeCurrentTab(tab.path)}
				class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
			>
				{tab.text}
			</a>
		</div>
	{/each}
</div>
