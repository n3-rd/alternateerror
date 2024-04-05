<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { formatDate } from '$lib/utils/index';
	import { InfoIcon } from 'lucide-svelte';

	export let post: any;
</script>

<div class="post-info flex flex-col gap-4 px-72 py-16">
	<h1
		class="post-title article-header text-center text-6xl font-extrabold capitalize"
		style:--article-header="article-{post.slug.current}"
	>
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

<style>
	.article-header {
		view-transition-name: var(--article-header);
	}
</style>
