import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./styles/**/*.{css,scss,sass,less,styl,stylus}",
		"./public/**/*.{ico,png,svg,jpg,jpeg,gif,webp,avif,mp4,webm,ogg,mp3,wav,flac,aac,wma,woff,woff2,ttf,eot,otf}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
export default config;
