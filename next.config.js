/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove swcMinify as it's not recognized
  output: 'export', // Enable static export
  // Fix basePath by removing trailing slash and ensuring consistent naming
  basePath: process.env.NODE_ENV === 'production' ? '/lab9-my-styled-app' : '', 
  // Fix assetPrefix for consistent naming
  assetPrefix: process.env.NODE_ENV === 'production' ? '/lab9-my-styled-app' : '',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Add trailing slashes for consistent paths
};

module.exports = nextConfig;
