<script>
	import NavBar from '../components/NavBar.svelte';
	export let data;
</script>

<div class="relative flex w-full justify-center gap-10 p-10 bg-black overflow-hidden">
	<img class="h-full w-full absolute object-cover opacity-50 blur-xs" src='/images/bg.png' alt="">
	<NavBar />
	 <div class="flex flex-wrap gap-10 justify-between w-3/4">
	{#each data.items.results as item}
		<a href={`/movies/${item.id}`} class='z-1 hover:scale-[1.05] transition ease-in-out '>
			<div class="flex flex-col gap-2 border-white border-3 bg-white rounded-md w-[300px]">
				<img
					class="rounded-md object-contain backdrop-blur-xs rounded-b-none"
					src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
					alt=""
				/>
				<div class="p-2">
					<div class="text-ellipsis truncate">{item.title}</div>
					<div class="h-full">Released - {item.release_date}</div>
				</div>
			</div>
		</a>
	{/each}
</div>
</div>
