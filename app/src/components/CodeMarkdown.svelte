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

	console.log(text);
</script>

<!-- <pre class={`language-` + lang}>

	<code class="hljs py-5">{@html highlightedText}</code>
</pre> -->

<CodeBlock language={lang} {code} />
