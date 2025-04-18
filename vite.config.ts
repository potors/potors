import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import { sveltePhosphorOptimize as phosphor } from "phosphor-svelte/vite";

export default defineConfig({
	plugins: [phosphor(), sveltekit()]
});