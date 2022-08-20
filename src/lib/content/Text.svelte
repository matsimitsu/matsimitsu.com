<script>
	import Mark from './Mark.svelte';

	export let text = {};
	const optionalMarks = text.marks || [];
	const link = optionalMarks.find((m) => m.type === 'link');
	const code = optionalMarks.find((m) => m.type === 'code');
	const marks = optionalMarks.filter((m) => m.type !== 'link' && m.type !== 'code');
</script>

{#if link}
	<a href={link.attrs.href}>
		<Mark {marks}>{text.text}</Mark>
	</a>
{:else if code}
	<code>{text.text}</code>
{:else}
	<Mark {marks}>{text.text}</Mark>
{/if}
