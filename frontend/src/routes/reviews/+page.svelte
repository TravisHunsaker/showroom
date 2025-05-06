<script>
	import NavBar from '../../components/NavBar.svelte';
	import Button from '../../components/shared/Button.svelte';

	export let data;
	const reviews = data?.reviews ?? [];
</script>

<div class="relative flex h-screen w-full justify-center gap-10 overflow-hidden bg-black p-10">
	<img class="absolute h-full w-full object-cover opacity-50 blur-xs" src="/images/bg.png" alt="" />
	<NavBar />
	<div class="z-1 flex w-3/4 flex-col gap-10">
		<div class="text-4xl text-white">Reviews</div>
		<div class="flex flex-col gap-10">
			{#each reviews as review}
				<a href={`/movies/${review.movie.id}`} class="z-1 transition ease-in-out hover:scale-[1.05]">
					<div
						class="flex h-[250px] w-full overflow-hidden rounded-2xl border-3 border-white bg-black/75 shadow-2xl backdrop-blur-xs"
					>
						<img
							class="rounded-md rounded-tr-none rounded-br-none border-r-3 border-white object-contain backdrop-blur-xs"
							src={`https://image.tmdb.org/t/p/w500${review.movie.poster_path}`}
							alt=""
						/>
						<div class="flex flex-col justify-between w-full p-6 text-white">
							<div class="">
							<div class="item-center flex justify-between">
								<div class="truncate text-3xl text-ellipsis ">{review.movie.title}</div>
								<div class="flex space-x-1">
									{#each Array(review.review.rating).fill(0) as _, i (i)}
										<img src={'/icons/star.svg'} alt="Star" class="size-10" />
									{/each}
								</div>
							</div>
							<div class="text-xl">{review.review.review}</div>
						</div>
							<div class="flex items-center justify-end gap-6">
								<Button>Edit</Button>
								<Button>Delete</Button>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
