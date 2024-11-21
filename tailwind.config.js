/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'black-100': 'var(--black-100)',
                'black-200': 'var(--black-200)',
                'black-300': 'var(--black-300)',
                'black-400': 'var(--black-400)',
                'black-50': 'var(--black-50)',
                'black-800': 'var(--black-800)',
                'black-900': 'var(--black-900)',
                shadewhite: 'var(--shadewhite)',
            },
            fontFamily: {
                airbnb: [
                    '"Airbnb Cereal VF"',
                    'Circular',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Roboto',
                    '"Helvetica Neue"',
                    'sans-serif',
                ],
                inter: ['Inter', 'sans-serif'],
            },
            keyframes: {
                resizeanim: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.05)' },
                },
            },
            animation: {
                resizeanim: 'resizeanim 1ms ease-in-out',
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.scrollbar-gutter-stable': {
                    'scrollbar-gutter': 'stable',
                },
                '.transition-box-shadow-transform': {
                    transition: `
                    box-shadow 0.2s cubic-bezier(0.2, 0, 0, 1), 
                    transform 0.1s cubic-bezier(0.2, 0, 0, 1)
                    `,
                },
            });
        }),
    ],
};
