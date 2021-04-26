<script context="module">
	export async function load({page, fetch, context}) {
		const req = await fetch('/trips.json')
		const posts = await req.json()
		const tripPosts = posts.filter(p => p.url.startsWith(page.path))
		return {
			props: { posts: tripPosts }
		}
	}
</script>

<script>
	export let posts = []
</script>

<div class="mx-auto py-6">
	<div class="mx-auto">
		<slot />
	</div>
	<h3>Related posts</h3>
	<ul>
	{#each posts as post}
		<li><a target="_blank" href={post.url}>
			{post.title}
		</a></li>
	{/each}
	</ul>
</div>
