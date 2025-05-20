<script>
	import NavBar from './NavBar.svelte';
	import SearchBar from '../home/SearchBar.svelte';

	export let title;
</script>

<NavBar />
<div
	class="relative flex w-full flex-col justify-center gap-10 overflow-hidden bg-black px-4 pt-35 pb-4 sm:px-10 sm:pb-10"
>
	<img
		class="absolute top-0 left-0 h-full w-full object-cover opacity-50 blur-xs"
		src="/images/bg.png"
		alt=""
	/>

	<div class="flex justify-center">
		<div class="z-1 flex w-full flex-col gap-6 lg:w-3/4">
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
