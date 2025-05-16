<script>
	export let outlined = false;
	export let disabled = false;
</script>

<button
	on:click
	{disabled}
	class={`relative box-border rounded-lg px-6 py-2 font-medium transition-all ease-in-out hover:scale-115 disabled:opacity-50 ${outlined ? 'blurredBlack border-[2px] border-white text-white' : 'bg-white text-black'}`}
>
	<slot></slot>
</button>
