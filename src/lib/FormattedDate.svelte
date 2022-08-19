<script>
	import dayjs from 'dayjs';
	import customParseFormat from 'dayjs/plugin/customParseFormat';
	dayjs.extend(customParseFormat);

	export let date;
	let dayjsDate = dayjs(date);
</script>

<time datetime={dayjsDate.toISOString()}>{dayjsDate.toDate().toLocaleDateString()}</time>
