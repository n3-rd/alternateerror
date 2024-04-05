<script lang="ts">
	import '../app.pcss';
	import { isPreviewing, VisualEditing } from '@sanity/visual-editing/svelte';
	import { page } from '$app/stores';
	import LiveMode from '../components/LiveMode.svelte';
	import Header from '../components/Header.svelte';
	import { setupViewTransition } from 'sveltekit-view-transition';

	setupViewTransition();
</script>

{#if $isPreviewing}
	<a href={`/preview/disable?redirect=${$page.url.pathname}`} class="preview-toggle">
		<span>Preview Enabled</span>
		<span>Disable Preview</span>
	</a>
{/if}

<!-- <header class="px-8"> -->
<Header />
<!-- </header> -->

<main class=" px-8 pt-24">
	<slot />
</main>

{#if $isPreviewing}
	<VisualEditing></VisualEditing>
	<LiveMode></LiveMode>
{/if}

<style>
	/* Disable default crossfade. */
	:root {
		view-transition-name: none;
	}

	/* Or, just modify the duration. */
	:global(::view-transition-old(root)),
	:global(::view-transition-new(root)) {
		animation-duration: 2s;
	}
</style>
