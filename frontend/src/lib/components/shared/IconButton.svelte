<script lang="ts">
	export let iconPath: string;
	export let size = 'size-9' as string;
</script>

<button on:click class="opacityOnHover">
	<img src={iconPath} alt="icon" class={size} />
</button>
