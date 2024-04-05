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

	export let data: PageData;
	export let source: string;
	const q = useQuery(data);

	$: ({ data: post } = $q);

	$: {
		// @ts-ignore
		source = data.options.initial.data.body;
	}
</script>

<section class="post">
	<div class="post-info flex flex-col gap-4 px-72 py-16">
		<h1 class="post-title text-center text-6xl font-extrabold capitalize">
			{post.title}
		</h1>
		<div class="post-excerpt text-center">
			{#if post.excerpt}
				<p class="post__excerpt text-2xl font-light lowercase">{post.excerpt}</p>
			{/if}
		</div>

		<Separator class="bg-gray-700" />
		<div class="post-metadata flex min-w-full justify-between font-semibold">
			<div class="tag flex items-center gap-3">
				<span class="">Tags</span>
				<InfoIcon class="h-6 w-6 font-thin" stroke-width="0.2" />
			</div>
			<div class="date">
				<p class="">
					{formatDate(post._createdAt)}
				</p>
			</div>
		</div>
	</div>

	<div class="main-image">
		{#if post.mainImage}
			<img
				class="post__cover min-w-full"
				src={urlFor(post.mainImage).url()}
				alt="Cover image for {post.title}"
			/>
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
