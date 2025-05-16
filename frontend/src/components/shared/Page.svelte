<script>
	import NavBar from '../NavBar.svelte';
	import SearchBar from '../SearchBar.svelte';

	export let title;
</script>

<NavBar />
<div
	class="relative flex w-full flex-col justify-center gap-10 overflow-hidden bg-black p-10 pt-35"
>
	<img class="absolute h-full w-full object-cover opacity-50 blur-xs" src="/images/bg.png" alt="" />

	<div class="flex justify-center">
		<div class="z-1 flex w-full flex-col gap-10 lg:w-3/4">
			<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
				<div class="text-2xl text-white md:text-4xl">{title}</div>
				{#if title !== 'Watchlist' && title !== 'Reviews'}
					<SearchBar />
				{/if}
			</div>
			<slot></slot>
		</div>
	</div>
</div>
