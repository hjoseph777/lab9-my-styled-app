/** @type {import('next').NextConfig} */

const repo = 'lab9-my-styled-app'
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? `/${repo}/` : '',
  basePath: isProd ? `/${repo}` : '',
  output: 'export',
  trailingSlash: true,
  webpack: (config) => {
    // This makes sure assets work with GitHub Pages
    config.output.publicPath = isProd ? `/${repo}/` : '/';
    return config;
  },
  // Prevent loading failures with CSS
  experimental: {
    esmExternals: false
  }
}

module.exports = nextConfig
