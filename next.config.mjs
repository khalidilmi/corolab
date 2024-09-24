// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true,
    },
    webpack: (config) => {
      return config;
    },
  };
  
  export default nextConfig;
  