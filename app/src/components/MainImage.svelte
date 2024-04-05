<script lang="ts">
	export let src: string;
	export let altText: string | undefined;
	export let id: string;
</script>

<img
	class="post__cover min-w-full"
	{src}
	alt="Cover image for {altText}"
	style:--tag="image-{id}"
/>

<style type="text/css">
	img {
		view-transition-name: var(--tag);
	}
</style>
