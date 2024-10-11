/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    modularizeImports: {
        '@mui/icons-material': {
            transform: '@mui/icons-material/{{member}}',
        },
    },
    images: {
        domains: [
            'avatars.githubusercontent.com',
            'lh3.googleusercontent.com',
            'flagcdn.com',
            'res.cloudinary.com',
            'a0.muscache.com',
            'c.animaapp.com',
            'via.placeholder.com',
            'i.pinimg.com',
        ],
    },
};

export default nextConfig;
