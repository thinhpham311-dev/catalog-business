import { type Config } from 'tailwindcss'

export default {
  important: true,
  content: ['*'],
  theme: {
    extend: {
      colors: {
        primary: '#1137ca',
        "primary-1": '#0b48ed',
        "primary-2": '#0a3cce',
        "primary-3": '#02268e',
        secondary: '#dadada69',
        "secondary-1": '#ffffff5c',
        "secondary-2": '#ffffff48',
        "secondary-3": '#ffffff81',
        "secondary-4": '#ffffff53',
      },
      fontFamily: {
        "type-1": 'a',
        "type-2": 'b',
        "type-3": 'c',
      },
      backgroundImage: {
        'hero-pattern': "url('https://thisismagma.com/wp-content/uploads/2023/04/magma.wp2.cubdev.com-home-1.jpeg')",
      },
      keyframes: {
        scroll: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(calc(-300px * 2))' },
        }
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      }
    },
    fontSize: {
      '5xl': '12rem',
      '4xl': '8rem',
      '3xl': '6rem',
      '2xl': '4.5rem',
      'xl': '4rem',
      'lg': '3.6rem',
      'md': '3rem',
      'sm': '2.4rem',
      'xs': '2.2rem',
      '2xs': '1.8rem',
      '3xs': '1.2rem',
      '4xs': '1rem',
      '5xs': '0.75rem'
    },
  },
  plugins: [],
} satisfies Config
