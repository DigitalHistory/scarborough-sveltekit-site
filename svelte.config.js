import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter()
	},

	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		}),
		mdsvex(mdsvexConfig)
	]
};

export default config;
