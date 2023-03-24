import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		watch: {
			usePolling: true,
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'#': path.resolve(__dirname, '.'),
			// {
			// 	find: '@components',
			// 	replacement: resolve(__dirname, './src/components'),
			// },
			'@components': path.resolve(__dirname, './src/components'),
			'@css': path.resolve(__dirname, './src/scss'),
		},
	},
});
