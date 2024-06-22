/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "sun9-10.userapi.com"
            },            
            {
                protocol: "https",
                hostname: "sun9-42.userapi.com"
            },            
        ]
    }
};

export default nextConfig;
