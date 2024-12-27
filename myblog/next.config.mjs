/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: true,
    reactStrictMode: true,
    images: {
      domains: ['cdn.sanity.io', 'lh3.googleusercontent.com'],
    /*  remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',  
          pathname: '/**', // Match all paths under this domain
        },
      ], */
    },
  };
  
  export default nextConfig;
  