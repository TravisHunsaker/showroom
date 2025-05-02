<script>
	export let data;
</script>

<div class="flex w-full flex-wrap justify-between gap-10 p-10">
	{#each data.items.results as item}
		<a href={`/movies/${item.id}`}>
			<div class="flex w-[300px] gap-4">
				<img
					class="w-[200px] rounded-xl object-contain"
					src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
					alt=""
				/>
				<div>
					<div>{item.title}</div>
					<!-- <div class="h-full">{item.overview}</div> -->
				</div>
			</div>
		</a>
	{/each}
</div>
