/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'localhost'],
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
