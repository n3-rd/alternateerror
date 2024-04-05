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
		/>
	{:else}
		<div class="card__cover--none" />
	{/if}

	<div class="card__container">
		<h3 class="text-4xl font-extrabold uppercase tracking-wide text-slate-800">
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
