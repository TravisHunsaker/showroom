<script>
	export let outlined = false;
	export let disabled = false;
	export let fullWidth = false;
</script>

<button
	on:click
	{disabled}
	class={`relative rounded-lg px-4 py-2 text-sm font-medium disabled:opacity-50 border-[2px] border-white sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg opacityOnHover
    ${outlined ? 'box-border blurredBlack text-white' : 'bg-white text-black'} ${fullWidth ? 'w-full' : ''}`}
>
	<slot />
</button>
