<script lang="ts">
	export let genres: { name: string }[];
</script>

<div class="flex gap-2">
	{#each genres as genre}
		<div class="rounded-full bg-white/25 px-4 py-1 font-bold backdrop-blur-xs">
			{genre.name}
		</div>
	{/each}
</div>
