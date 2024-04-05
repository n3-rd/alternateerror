<script lang="ts">
	import { formatDate } from '$lib/utils/index';
	import { urlFor } from '$lib/sanity/image';
	import type { Post } from '$lib/sanity/queries';

	export let post: Post;
</script>

<a
	class="card flex h-auto w-auto flex-col gap-6 transition-all duration-300 ease-in-out hover:grayscale"
	href={`/post/${post.slug.current}`}
>
	{#if post.mainImage}
		<img
			class="w-auto"
			src={urlFor(post.mainImage).width(500).height(300).url()}
			alt="Cover image for {post.title}"
			style:--tag="image-{post.slug.current}"
		/>
	{:else}
		<div class="card__cover--none" />
	{/if}

	<div class="card__container">
		<h3
			class="article-header line-clamp-4 text-4xl font-extrabold uppercase tracking-wide text-slate-800"
			style:--article-header="article-{post.slug.current}"
		>
			{post.title}
		</h3>
		<!-- {#if post.excerpt}
			<p class="card__excerpt">{post.excerpt}</p>
		{/if} -->
		<p class="card__date">
			{formatDate(post._createdAt)}
		</p>
	</div>
</a>

<style type="text/css">
	img {
		view-transition-name: var(--tag);
	}
	.article-header {
		view-transition-name: var(--article-header);
	}
</style>
