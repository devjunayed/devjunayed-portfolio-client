/** @type {import('next').NextConfig} */

const nextConfig = {
    /* config options here */
    images: {
      dangerouslyAllowSVG: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
  };
  
  export default nextConfig;
  
