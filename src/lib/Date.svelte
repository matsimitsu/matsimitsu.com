<script>
	export let date;
</script>

<time datetime="{date.toISOString()}">{date.toLocaleDateString()}</time>
