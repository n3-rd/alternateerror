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
	<title>Alternate Error | Get updated tech news on</title>
	<meta name="description" content={post.excerpt} />
	<meta property="og:title" content={post.title} />
	<meta property="og:description" content={post.excerpt} />
	<meta property="og:image" content={urlFor(post.mainImage).url()} />
	<meta property="og:url" content={`https://www.alejandropuente.com/post/${post.slug}`} />
	<meta property="og:type" content="article" />
	<meta property="article:published_time" content={formatDate(post._createdAt)} />
	<meta property="article:author" content="Jemegah Godwin" />
	<meta property="article:section" content="Technology" />
	<meta property="article:tag" content={tags.map((tag) => tag.title).join(', ')} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="site" />
	<meta name="twitter:creator" content="@n3_rdd" />
	<meta name="twitter:title" content={post.title} />
	<meta name="twitter:description" content={post.excerpt} />
	<meta name="twitter:image" content={urlFor(post.mainImage).url()} />
	<meta name="twitter:url" content={`https://www.alejandropuente.com/post/${post.slug}`} />
	<meta name="twitter:label1" content="Reading time" />
	<meta name="twitter:data1" content={`${timeToRead(post.body)} min read`} />
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
