<script lang="ts">
	import { Input } from '$lib/components/ui/input';

	export let data;
	console.log(data);

	// @ts-ignore
	let tags = [...new Set(data.tags.map((tag) => tag.label))].map((label) => ({
		label
	}));

	let searchValue: string;
	let searchInput: HTMLInputElement;

	const search = () => {
		const searchValue = searchInput.value.toLowerCase();
		tags = [
			...new Set(
				data.tags
					// @ts-ignore
					.filter((tag) => tag.label.toLowerCase().includes(searchValue))
					// @ts-ignore
					.map((tag) => tag.label)
			)
		].map((label) => ({
			label
		}));
	};
</script>

<svelte:head>
	<title>Alternateerror | Tags</title>
	<meta
		name="description"
		content="Alternateerror | Get updated tech news on sveltekit, javascript, typescrip and react"
	/>
	<meta property="og:title" content="Alternateerror | Get updated developer news" />
	<meta
		property="og:description"
		content="Alternateerror | Get updated tech news on sveltekit, javascript, typescrip and react"
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
		content="Alternateerror | Get updated tech news on sveltekit, javascript, typescrip and react"
	/>
	<meta name="twitter:image" content="/mainimage.png" />
	<meta name="twitter:url" content="https://alternateerror.me" />
</svelte:head>

<div class="flex flex-col gap-4 py-24">
	<h1 class=" text-6xl font-bold">Tags</h1>
	<div class="search">
		<input
			type="text"
			placeholder="Search tags"
			class="search-input w-72 rounded-lg border-2 border-gray-300 px-5 py-3 transition-all duration-300 ease-in-out focus:border-gray-500 focus:outline-none"
			bind:this={searchInput}
			bind:value={searchValue}
			on:input={search}
		/>
	</div>
</div>

<div class="flex flex-wrap gap-14">
	{#each tags as tag}
		<a href={`/tags/${tag.label}`} class="tag-item text-4xl">{tag.label}</a>
	{/each}
</div>
