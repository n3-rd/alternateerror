<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { formatDate } from '$lib/utils/index';
	import { MousePointerClick, Tags } from 'lucide-svelte';
	import * as Popover from '$lib/components/ui/popover';
	import { timeToRead } from '$lib/utils';
	export let tags: Tags;
	export let post: any;
	console.log('post', post);
</script>

<div class="post-info mx-auto flex w-full flex-col gap-4 py-16 md:max-w-[800px]">
	<h1
		class="post-title article-header text-center text-4xl font-extrabold capitalize md:text-6xl"
		style:--article-header="article-{post.slug.current}"
	>
		{post.title}
	</h1>
	<div class="post-excerpt text-center">
		{#if post.excerpt}
			<p class="post__excerpt text-lg font-light lowercase md:text-2xl">{post.excerpt}</p>
		{/if}
	</div>
	<p class=" font-semibold">
		Time to read: ~ {timeToRead(post.body)} min
	</p>

	<Separator class="bg-gray-700" />
	<div class="post-metadata flex min-w-full justify-between font-semibold">
		<Popover.Root>
			<Popover.Trigger>
				<div class="tag flex cursor-pointer items-center gap-3">
					<span class="">Tags</span>
					<MousePointerClick class="h-6 w-6 font-thin" stroke-width="0.2" />
				</div>
			</Popover.Trigger>
			<Popover.Content class="rounded-lg">
				<div class="tag-list flex flex-wrap gap-2">
					<!-- {tags[0].value} -->
					{#each tags as tag (tag._key)}
						<!-- {tag.value} -->
						<a
							href={`/tags/${tag.value.toLowerCase()}`}
							class="tag-item rounded-lg bg-gray-200 px-2 py-1 text-sm font-semibold dark:bg-gray-800 dark:text-gray-200"
							>{tag.value.toLowerCase()}</a
						>
					{/each}
				</div>
			</Popover.Content>
		</Popover.Root>

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
