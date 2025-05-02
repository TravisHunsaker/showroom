<script>
	import { fade } from 'svelte/transition';
</script>

<div
	transition:fade={{ duration: 150 }}
	class="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
>
	<div class="h-[500px] w-[500px] rounded-xl bg-white opacity-100">
		<input type="text" />
	</div>
</div>
