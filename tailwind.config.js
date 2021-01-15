module.exports = {
    theme: {
        // Colorscheme: https://www.colorbox.io/#steps=10#hue_start=248#hue_end=232#hue_curve=easeOutSine#sat_start=0#sat_end=50#sat_curve=easeOutSine#sat_rate=120#lum_start=100#lum_end=10#lum_curve=easeOutSine#minor_steps_map=0
        minHeight: {
            '25': '25vh',
            '50': '50vh',
            '75': '75vh',
        },
        boxShadow: {
            outline: '0 0 0 2px #c5c3f5'
        },
        colors: {
            transparent: 'transparent',
            black: '#000',
            white: '#fff',
            key: '#0a0c1a',
            gray: {
                '100': '#f2f1fe',
                '200': '#e5e3fd',
                '300': '#c5c3f5',
                '400': '#a0a0e6',
                '500': '#7d81d0',
                '600': '#5d64b3',
                '700': '#424a8f',
                '800': '#2c3368',
                '900': '#1a1f40',
            }
        }
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'active'],
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
        position: ['responsive', 'focus'],
    },
    darkmode: 'class',
}
