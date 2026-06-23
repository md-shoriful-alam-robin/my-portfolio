/** @type {import('next').NextConfig} */
const nextConfig = {
  // Sanity / Strapi image domains — add here when CMS is connected
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
  // Transpile Three.js ecosystem
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
}

module.exports = nextConfig
