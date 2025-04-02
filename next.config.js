/** @type {import('next').NextConfig} */

const repo = 'lab9-my-styled-app'
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? `/${repo}/` : '',
  basePath: isProd ? `/${repo}` : '',
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
