import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import mdsvexConfig from "./mdsvex.config.cjs"
import preprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config =  {
	extensions: [".svelte", ...mdsvexConfig.extensions],
	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			defaults: {
				style: "postcss",
			},
			postcss: true
		}),
	],
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: {
			adapt: adapter
		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {}
	}
};

export default config;
