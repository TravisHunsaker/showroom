<script>
	export let outlined = false;
</script>

<button
	on:click
	class={`relative  inline-flex  rounded-lg px-6 py-2 font-bold transition-all ease-in-out hover:scale-115 ${outlined ? 'border-[2px] border-white bg-transparent' : 'bg-white text-black'}`}
>
	<slot></slot>
</button>
