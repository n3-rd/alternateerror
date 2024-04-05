<script lang="ts">
	import hljs from 'highlight.js';
	import { CodeBlock } from 'svhighlight';

	export let text = '';
	export let lang = '';

	let highlightedText = hljs.highlight(text, { language: lang || 'plaintext' }).value;
	// hljs.initLineNumbersOnLoad();

	text = `
        ${text}
    `;

	let code = text;

	const newlangs = ['vue', 'svelte'];
	if (newlangs.includes(lang)) lang = 'html';
</script>

<div class="py-7">
	<CodeBlock language={lang} {code} />
</div>
