<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import { formatDate } from '$lib/utils/index';
	import { urlFor } from '$lib/sanity/image';
	import type { PageData } from './$types';
	import { InfoIcon } from 'lucide-svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	import SvelteMarkdown from 'svelte-markdown';

	import 'highlight.js/styles/github-dark.css';
	import CodeMarkdown from '../../../components/CodeMarkdown.svelte';
	import MainImage from '../../../components/MainImage.svelte';
	import PostInfo from '../../../components/PostInfo.svelte';

	export let data: PageData;
	export let source: string;
	const q = useQuery(data);
	let tags;

	$: ({ data: post } = $q);

	$: {
		// @ts-ignore
		source = data.options.initial.data.body;
		tags = data.tags;
	}
	console.log('post', data);
</script>

<section class="post">
	<PostInfo {post} {tags} />

	<div class="main-image">
		{#if post.mainImage}
			{#if post.mainImage}
				<MainImage src={urlFor(post.mainImage).url()} altText={post.title} id={post.slug.current} />
			{/if}
		{:else}
			<div class="post__cover--none" />
		{/if}
	</div>
	<div class="post__container flex min-w-full justify-center py-8">
		{#if post.body}
			<div class="post__content max-w-prose text-pretty text-xl">
				<!-- <Markdown {source} /> -->
				<SvelteMarkdown renderers={{ code: CodeMarkdown }} {source} />
			</div>
		{/if}
	</div>
</section>
