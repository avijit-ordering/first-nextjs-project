/** @type {import('next').NextConfig} */
//const { i18n } = require('./next-i18next.config.js')
const nextConfig = {

	output: "export",
	distDir: 'dist',
	skipTrailingSlashRedirect: true,
    images: { unoptimized: true },
    reactStrictMode: true,
	//i18n,
	trailingSlash: true,
};

export default nextConfig;
