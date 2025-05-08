<script>
import NavBar from '../NavBar.svelte';

	export let title;
</script>

<div class="relative flex w-full justify-center gap-10 overflow-hidden bg-black p-10">
	<img class="absolute h-full w-full object-cover opacity-50 blur-xs" src="/images/bg.png" alt="" />
	<NavBar />

	<div class="z-1 flex w-3/4 flex-col gap-10">
		<div class="text-4xl text-white">{title}</div>
		<slot></slot>
	</div>
</div>
