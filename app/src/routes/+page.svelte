<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import Card from '../components/Card.svelte';
	import Welcome from '../components/Welcome.svelte';
	import type { PageData } from './$types';
	import { urlFor } from '$lib/sanity/image';
	import { updated } from '$app/stores';

	export let data: PageData;
	const q = useQuery(data);

	$: ({ data: posts } = $q);

	// console.log(urlFor($q.data[0].mainImage).url());
</script>

<svelte:head>
	<title>Alternate Error | Get updated developer news</title>
	<meta
		name="description"
		content="Alternate Error | Get updated tech news on sveltekit, javascript, typescrip and react"
	/>
	<meta property="og:title" content="Alternate Error | Get updated developer news" />
	<meta
		property="og:description"
		content="Alternate Error | Get updated tech news on sveltekit, javascript, typescrip and react"
	/>
	<meta property="og:image" content="/mainimage.png" />
	<meta property="og:url" content="https://alternateerror.me" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="site" />
	<meta name="twitter:creator" content="@n3_rdd" />
	<meta name="twitter:title" content="Alternate Error | Get updated developer news" />
	<meta
		name="twitter:description"
		content="Alternate Error | Get updated tech news on sveltekit, javascript, typescrip and react"
	/>
	<meta name="twitter:image" content="/mainimage.png" />
	<meta name="twitter:url" content="https://alternateerror.me" />
</svelte:head>

<section class="relative">
	{#if posts.length}
		<div class="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
			{#each posts as post}
				<Card {post} />
			{/each}
		</div>
	{:else}
		<Welcome />
	{/if}
</section>
