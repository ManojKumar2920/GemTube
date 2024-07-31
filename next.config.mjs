/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enable React Strict Mode
    images: {
      domains: [
        "firebasestorage.googleapis.com",
        "lh3.googleusercontent.com",
        "anotherdomain.com",
      ],
    },
  };
  
  export default nextConfig;
  