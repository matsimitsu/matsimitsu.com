import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import mdsvexPkg from 'mdsvex';
const { mdsvex } = mdsvexPkg;
import mdsvexConfig from './mdsvex.config.cjs';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			postcss: true
		})
	],
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: adapter({
			pages: 'build',
			assets: 'build',
		}),
		prerender: {
			default: true
		},
		vite: {}
	}
};

export default config;
