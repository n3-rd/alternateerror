<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import Card from '../components/Card.svelte';
	import Welcome from '../components/Welcome.svelte';
	import type { PageData } from './$types';
	import { urlFor } from '$lib/sanity/image';

	export let data: PageData;
	const q = useQuery(data);

	$: ({ data: posts } = $q);
	console.log('1', $q);

	// console.log(urlFor($q.data[0].mainImage).url());
</script>

<section class="relative">
	{#if posts.length}
		<div class="grid grid-cols-4 gap-7">
			{#each posts as post}
				<Card {post} />
			{/each}
			{#each posts as post}
				<Card {post} />
			{/each}
			{#each posts as post}
				<Card {post} />
			{/each}
			{#each posts as post}
				<Card {post} />
			{/each}
			{#each posts as post}
				<Card {post} />
			{/each}
		</div>
	{:else}
		<Welcome />
	{/if}
</section>
