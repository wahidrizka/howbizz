import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	env: {
		npm_package_name: process.env.npm_package_name,
		npm_package_version: process.env.npm_package_version,
	},
};

export default nextConfig;
