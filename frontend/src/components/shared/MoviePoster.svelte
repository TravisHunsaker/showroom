<script lang="ts">
	export let posterPath = '';
	export let alt = 'Movie Poster';

	export let variant: 'default' | 'side' | 'card' | 'modal' | 'details' = 'default';
</script>

<img
	loading="lazy"
	src={`https://image.tmdb.org/t/p/w500${posterPath}`}
	{alt}
	class={variant === 'default'
		? 'border3 hidden w-[400px] rounded-xl object-contain lg:block'
		: variant === 'side'
			? 'h-1/2 rounded-md rounded-tr-none rounded-br-none border-r-3 object-contain backdrop-blur-xs md:h-full md:border-white'
			: variant === 'card'
				? 'rounded-md rounded-b-none object-contain'
				: variant === 'modal'
					? 'w-[125px] rounded-md object-contain sm:w-[150px]'
					: variant === 'details'
						? 'w-[100px] rounded-md object-contain lg:hidden'
						: ''}
/>
