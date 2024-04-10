<script>
	import Card from '../../../components/Card.svelte';

	export let data;
	console.log(data);
	const posts = data.posts;
	const slug = data.slug;
	const postCount = posts.length;
</script>

<svelte:head>
	<title>Alternateerror | Tags for {slug}</title>
	<meta name="description" content="Alternateerror | Tags for {slug}" />
	<meta property="og:title" content="Alternateerror | Tags for {slug}" />
	<meta
		property="og:description"
		content="Alternateerror | Get updated tech news on sveltekit, javascript, typescript and react"
	/>
	<meta property="og:image" content="/mainimage.png" />
	<meta property="og:url" content="https://alternateerror.me" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="site" />
	<meta name="twitter:creator" content="@n3_rdd" />
	<meta name="twitter:title" content="Alternateerror | Get updated developer news" />
	<meta
		name="twitter:description"
		content="Alternateerror | Get updated tech news on sveltekit, javascript, typescript and react"
	/>
	<meta name="twitter:image" content="/mainimage.png" />
	<meta name="twitter:url" content="https://alternateerror.me" />
</svelte:head>

<section class="relative">
	<h1 class="h1 py-5 text-center text-5xl font-bold">
		{postCount} <span>{postCount === 1 ? 'Post' : 'Posts'}</span> tagged "{slug}"
	</h1>
	{#if posts.length}
		<div class="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
			{#each posts as post}
				<Card {post} />
			{/each}
		</div>
	{:else}
		<p>No posts found</p>
	{/if}
</section>
