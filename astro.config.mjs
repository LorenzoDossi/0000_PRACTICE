import { defineConfig } from 'astro/config';
import sassGlobImports from 'vite-plugin-sass-glob-import';

// https://astro.build/config
export default defineConfig({
	compressHTML: true,
	outDir: 'build',
	devToolbar: {
		enabled: false,
	},
	vite: {
	    css: {
	    	devSourcemap: true,
	    },
		plugins: [
			sassGlobImports()
		]
	},
});
