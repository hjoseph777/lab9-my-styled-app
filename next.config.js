/** @type {import('next').NextConfig} */

const repo = 'lab9-my-styled-app'
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      // Enable all styled-components features for client-side rendering
      ssr: false, // Set to false since GitHub Pages is client-side only
      displayName: true,
      minify: isProd,
    },
  },
  images: {
    unoptimized: true, // Required for static export
  },
  assetPrefix: isProd ? `/${repo}/` : '',
  basePath: isProd ? `/${repo}` : '',
  output: 'export', // Static HTML export for GitHub Pages
  trailingSlash: true, // Important for GitHub Pages
  
  // Enhanced webpack config for GitHub Pages compatibility
  webpack: (config) => {
    if (isProd) {
      config.output.publicPath = `/${repo}/`;
      
      // Add assets handling
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              publicPath: `/${repo}/_next/static/images/`,
              outputPath: 'static/images/',
              name: '[name]-[hash].[ext]',
            },
          },
        ],
      });
    }
    return config;
  }
}

module.exports = nextConfig
