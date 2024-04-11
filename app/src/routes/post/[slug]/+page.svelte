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
	import { timeToRead } from '$lib/utils';

	export let data: PageData;
	console.log('data', data);
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

<svelte:head>
	<title>{data.options.initial.data.title}</title>
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
			<div
				class="post__content first-letter:[font-family: 'Cabinet Grotesk', sans-serif;] max-w-full text-pretty text-xl first-letter:text-5xl first-letter:font-semibold first-letter:uppercase first-letter:tracking-wide lg:max-w-prose"
			>
				<!-- <Markdown {source} /> -->
				<SvelteMarkdown renderers={{ code: CodeMarkdown }} {source} />
			</div>
		{/if}
	</div>
</section>
