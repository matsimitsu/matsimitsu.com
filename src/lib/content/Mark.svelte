<script>
	export let marks = [];

	// Pop a mark off the list and
	// take the rest as a separate value
	const [mark, ...remainingMarks] = marks;
	const ELEMENT_MAP = {
		underline: 'u',
		highlight: 'mark',
		strike: 's',
		italic: 'em',
		bold: 'strong'
	};
</script>

{#if mark}
	<!-- render HTML element for mark type -->
	<svelte:element this={ELEMENT_MAP[mark.type]}>
		{#if remainingMarks.length > 0}
			<!-- render self with the remaining marks-->
			<svelte:self marks={remainingMarks}>
				<slot />
			</svelte:self>
		{:else}
			<!-- no remaining marks, render the slot contents -->
			<slot />
		{/if}
	</svelte:element>
{:else}
	<!-- no mark to render, render the slot contents -->
	<slot />
{/if}
