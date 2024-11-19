import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/styles/**/*.{css,scss,sass,less,stylus}",
	],
	theme: {
		extend: {
			colors: {},
		},
	},
	plugins: [],
} satisfies Config;
