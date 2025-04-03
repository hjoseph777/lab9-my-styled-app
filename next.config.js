/** @type {import('next').NextConfig} */

const repo = 'lab9-my-styled-app'
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? `/${repo}/` : '',
  basePath: isProd ? `/${repo}` : '',
  output: 'export',
  trailingSlash: true,
  webpack: (config) => {
    if (isProd) {
      config.output.publicPath = `/${repo}/`;
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
      });
    }
    return config;
  }
}

module.exports = nextConfig
