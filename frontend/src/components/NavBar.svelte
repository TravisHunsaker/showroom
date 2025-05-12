<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

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
	class="fixed z-1 flex h-full w-full flex-col items-start justify-center gap-6 pl-10 text-xl font-bold text-white"
>
	{#each tabs as tab (tab.id)}
		<div class="flex items-center gap-4">
			
			<a
				href={tab.path}
				on:click|preventDefault={() => changeCurrentTab(tab.path)}
				class="relative after:absolute after:bg-white after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
			>
				{tab.text}
			</a>
		</div>
	{/each}
</div>
