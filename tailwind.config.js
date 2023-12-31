/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}', './public/index.html'],
    theme: {
        extend: {
            backgroundColor: {},

            keyframes: {
                'slide-right': {
                    '0%': {
                        '-webkit-transform': ' translateX(-500px);',
                        transform: 'translateX(-500px);',
                    },
                    '100%': {
                        '-webkit-transform': 'translateX(0);',
                        transform: 'translateX(0);',
                    },
                },
                'slide-left': {
                    '0%': {
                        '-webkit-transform': ' translateX(500px);',
                        transform: 'translateX(500px);',
                    },
                    '100%': {
                        '-webkit-transform': 'translateX(0);',
                        transform: 'translateX(0);',
                    },
                },
                'slide-left2': {
                    '0%': {
                        '-webkit-transform': ' translateX(500px);',
                        transform: 'translateX(500px);',
                    },
                    '100%': {
                        '-webkit-transform': 'translateX(0);',
                        transform: 'translateX(0);',
                    },
                },
            },
            animation: {
                'slide-right':
                    'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
                'slide-left':
                    'slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
                'slide-left2':
                    'slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
            },
            flex: {
                4: '4 4 0%',
            },
        },
        screens: {
            1600: '1600px',
        },
    },
    plugins: [],
};
