<script>
	export let date;
	if (typeof(date) == "string") {
		date = new Date(date)
	}
</script>

<time datetime="{date.toISOString()}">{date.toLocaleDateString()}</time>
