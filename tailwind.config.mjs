/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'custom-bg': '#020617',
				'custom-hover': '#6a89cc',
				// 'custom-active': '#606878',
				'page-bg': '#0b0e19'
			}
		},
	},
	plugins: [],
}
