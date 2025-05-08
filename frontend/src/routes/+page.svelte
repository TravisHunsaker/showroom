<script>
	import Page from '../components/shared/Page.svelte';
	export let data;
</script>

<Page title='Movies'>
	<div class="flex flex-wrap justify-between gap-10">
		{#each data.items.results as item}
			<a href={`/movies/${item.id}`} class="z-1 transition ease-in-out hover:scale-[1.05]">
				<div
					class="flex w-[300px] flex-col gap-2 rounded-md border-3 border-white bg-white shadow-2xl"
				>
					<img
						class="rounded-md rounded-b-none object-contain backdrop-blur-xs"
						src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
						alt=""
					/>
					<div class="p-2">
						<div class="truncate text-ellipsis">{item.title}</div>
						<div class="h-full">Released - {item.release_date}</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</Page>

