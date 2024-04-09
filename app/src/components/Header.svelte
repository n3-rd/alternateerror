<script>
	import { Moon, Sun } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';
</script>

<div
	class="fixed z-50 flex min-w-full max-w-full items-center justify-between bg-white px-8 py-4 uppercase dark:bg-black"
>
	<div class="portfolio flex items-center gap-7 text-xl">
		<a href="https://n3rd.vercel.app" target="_blank">Portfolio</a>

		<button on:click={toggleMode}>
			<Sun class="hidden dark:block" />
			<Moon class="block dark:hidden" />
			<span class="sr-only">Toggle theme</span>
		</button>
	</div>
	<a href="/"><h1 class="blog-title text-5xl font-extrabold">A/E</h1></a>
	<div class="contact flex gap-7 text-xl">
		<a href="/about">About</a>
		<a href="/contact">Contact</a>
	</div>
</div>
