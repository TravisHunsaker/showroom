<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	const tabs = [
		{ path: '/', value: 'movies', text: 'Movies', id: '1' },
		{ path: '/watchlist', value: 'watchlist', text: 'Watchlist', id: '2' },
		{ path: '/reviews', value: 'reviews', text: 'Reviews', id: '3' }
	];

	$: currentTab = page.url.pathname === '/' ? 'movies' : page.url.pathname.slice(1);

	const changeCurrentTab = (path: string) => {
		goto(path);
	};
</script>

<div
	class="fixed z-1 flex h-full w-full flex-col items-start justify-center gap-6 pl-10 text-xl font-bold text-white"
>
	{#each tabs as tab (tab.id)}
		<div class="flex items-center gap-4">
			{#if currentTab === tab.value}
				<div class="h-[36px] w-[3px] bg-white"></div>
			{/if}
			<a
				href={tab.path}
				on:click|preventDefault={() => changeCurrentTab(tab.path)}
				class="focus:outline-none"
			>
				{tab.text}
			</a>
		</div>
	{/each}
</div>
