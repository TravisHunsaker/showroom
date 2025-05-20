<script lang="ts">
	export let rating: number = 0;
	export let max: number = 5;
	export let readonly: boolean = false;
	export let onRate: ((value: number) => void) | null = null;
</script>

<div class="flex space-x-1">
	{#each Array(max).fill(0) as _, i (i)}
		{#if readonly}
			<img
				src="/icons/star.svg"
				alt="Star"
				class="size-6 sm:size-8 lg:size-10"
				class:opacity-100={i < rating}
				class:opacity-0={i >= rating}
			/>
		{:else}
			<button on:click={() => onRate?.(i + 1)}>
				<img
					src="/icons/star.svg"
					alt="Star"
					class=" size-6 cursor-pointer transition-transform hover:scale-110 sm:size-8 lg:size-10"
					class:opacity-100={i < rating}
					class:opacity-30={i >= rating}
				/>
			</button>
		{/if}
	{/each}
</div>
