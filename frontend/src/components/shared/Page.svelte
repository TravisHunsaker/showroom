<script>
	import NavBar from '../NavBar.svelte';

	export let title;
</script>

<NavBar />
<div
	class="relative flex w-full flex-col justify-center gap-10 overflow-hidden bg-black p-10 pt-35"
>
	<img class="absolute h-full w-full object-cover opacity-50 blur-xs" src="/images/bg.png" alt="" />

	<div class="flex justify-center">
		<div class="z-1 flex w-full flex-col gap-10 lg:w-3/4">
			<div class="text-4xl text-white">{title}</div>
			<slot></slot>
		</div>
	</div>
</div>
