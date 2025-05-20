<script lang="ts">
	export let genres: { name: string }[];
</script>

<div class="flex flex-wrap gap-2">
	{#each genres as genre}
		<div class="rounded-full bg-white/25 px-4 py-2 text-sm font-bold backdrop-blur-xs sm:text-base">
			{genre.name}
		</div>
	{/each}
</div>
