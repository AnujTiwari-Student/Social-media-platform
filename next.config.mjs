/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rdsdigital.in",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "linkedinclone.blob.core.windows.net",
      },
    ],
  },
};

export default nextConfig;
