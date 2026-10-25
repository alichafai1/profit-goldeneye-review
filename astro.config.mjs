// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.profitgoldeneye.info',
	trailingSlash: 'never',
	build: {
		format: 'directory',
	},
	integrations: [sitemap()],
});
