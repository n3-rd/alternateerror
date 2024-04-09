<script>
	import Card from '../../../components/Card.svelte';

	export let data;
	console.log(data);
	const posts = data.posts;
	const slug = data.slug;
	const postCount = posts.length;
</script>

<section class="relative">
	<h1 class="h1 py-5 text-center text-5xl font-bold">
		{postCount} <span>{postCount === 1 ? 'Post' : 'Posts'}</span> tagged "{slug}"
	</h1>
	{#if posts.length}
		<div class="grid grid-cols-4 gap-7">
			{#each posts as post}
				<Card {post} />
			{/each}
		</div>
	{:else}
		<p>No posts found</p>
	{/if}
</section>
