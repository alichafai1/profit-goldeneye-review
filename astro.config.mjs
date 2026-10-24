// @ts-check
import { unlink, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

function singleSitemap() {
	return {
		name: 'single-sitemap',
		hooks: {
			'astro:build:done': async ({ dir }) => {
				const outDir = fileURLToPath(dir);
				await rename(path.join(outDir, 'sitemap-0.xml'), path.join(outDir, 'sitemap.xml'));
				await unlink(path.join(outDir, 'sitemap-index.xml'));
			},
		},
	};
}

// https://astro.build/config
export default defineConfig({
	site: 'https://www.profitgoldeneye.info',
	trailingSlash: 'never',
	build: {
		format: 'directory',
	},
	integrations: [sitemap(), singleSitemap()],
});
