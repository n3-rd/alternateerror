<script>
	import { LucideTwitter } from 'lucide-svelte';
</script>

<div class="flex min-w-full flex-col items-center justify-between gap-10 py-14 md:flex-row">
	<div class="flex flex-col gap-4 text-center md:text-left">
		<h2 class="blog-title text-4xl font-bold">
			<a href="/">Alternate Error</a>
		</h2>
		<div class="copyright text-gray-500">
			<p>&copy; 2024 Alternate Error</p>
		</div>
	</div>
	<div class="flex items-center gap-4">
		<a href="/">
			<LucideTwitter class="h-6 w-6" />
		</a>
	</div>
	<div class="links flex items-center gap-4">
		<a href="/about" class="text-gray-500">About</a>
		<a href="/contact" class="text-gray-500">Contact</a>
		<a href="/privacy" class="text-gray-500">privacy</a>
		<a href="/terms" class="text-gray-500">Terms</a>
	</div>
</div>
