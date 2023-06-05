/** @type {import('next').NextConfig} */


const nextConfig = {
  // reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    nextScriptWorkers: true,
  },
  images: {
    domains: ['images.unsplash.com', 'tailwindui.com'],
    // unoptimized: true
  }
}

module.exports = nextConfig
