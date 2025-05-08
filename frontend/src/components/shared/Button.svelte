<button
	on:click
	class="relative inline-flex overflow-hidden rounded-full p-[2px] transition-all ease-in-out hover:scale-115"
>
	<span
		class="absolute inset-[-200%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]"
	/>
	<span
		class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl"
	>
		<slot></slot>
	</span>
</button>
