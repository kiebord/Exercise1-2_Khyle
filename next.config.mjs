/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep the dev server cache separate from production builds. Otherwise,
  // running `next build` while developing can replace live webpack chunks.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  images: {
    // picsum.photos redirects to fastly.picsum.photos, so allow both
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
    ],
  },
};

export default nextConfig;
