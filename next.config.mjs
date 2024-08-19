/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ["", ""],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.pixabay.com"
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com"
            },
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com"
            }
        ]
    }
};

export default nextConfig;
