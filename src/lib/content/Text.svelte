<script>
	export let text = {};

	const markObject = {};
	for (const { type, ...rest } of text.marks || []) {
		markObject[type] = rest;
	}
	const textItem = { ...text, markTypes: markObject };
</script>

<span
	class:font-bold={textItem.markTypes.bold}
	class:italic={textItem.markTypes.italic}
	class:line-through={textItem.markTypes.strike}
	class:underline={textItem.markTypes.underline}
	class:bg-yellow-300={textItem.markTypes.highlight}
>
	{#if textItem.markTypes.link}
		<a href={textItem.markTypes.link.attrs.href}>
			{textItem.text}
		</a>
	{:else if textItem.markTypes.code}
		<code>{textItem.text}</code>
	{:else}
		{textItem.text}
	{/if}
</span>
