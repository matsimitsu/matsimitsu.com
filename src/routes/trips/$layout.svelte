<script context="module">

	// Use load function to get the current trip posts
	export async function load({page, fetch}) {
		const [_root, _trips, trip, post] = page.path.split('/')
		const req = await fetch(`/trips.json?trip=${trip}`)

		return {
			props: { tripPosts: await req.json() }
		}
	}
</script>

<script>
	export let tripPosts = []
</script>

<div class="mx-auto py-6">
	<div class="mx-auto">
		<slot />
	</div>
	{#if tripPosts.length > 1}
	<div>
		List of posts for trip
	</div>
	{/if}
	<div>
		Trip layout footer
	</div>
</div>
