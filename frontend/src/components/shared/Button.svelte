<script>
	export let outlined = false;
	export let disabled = false;
	export let fullWidth = false;
</script>

<button
	on:click
	{disabled}
	class={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all ease-in-out hover:scale-110 disabled:opacity-50 sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg
    ${outlined ? 'blurredBlack border-[2px] border-white text-white' : 'bg-white text-black'} ${fullWidth ? 'w-full' : ''}`}
>
	<slot />
</button>
