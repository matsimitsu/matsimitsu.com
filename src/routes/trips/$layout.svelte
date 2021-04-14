<script context="module">

	export async function load({page, fetch}) {
		const req = await fetch('/trips.json')
		const posts = await req.json()
		const splits = page.path.split('/')
		splits.pop()
		const trip = splits.join('/')
		const tripPosts = posts.filter(p => p.path.startsWith(trip))
		return {
			props: { posts: tripPosts }
		}
	}
</script>

<script>
	export let posts = []
</script>

<div class="mx-auto py-12">
	<slot />
	<h3>Related posts</h3>
	<ul>
	{#each posts as post}
		<li><a target="_blank" href={post.path}>
			{post.title}
		</a></li>
	{/each}
	</ul>
</div>
