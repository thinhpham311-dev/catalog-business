import { type Config } from 'tailwindcss'

export default {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        primary: '#1137ca',
        "primary-1": '#0b48ed',
        "primary-2": '#0a3cce',
        "primary-3": '#02268e',
        secondary: '#db00ff',
        "secondary-1": '#0047ff',
        "secondary-2": '#db00ff',
        "secondary-3": '#0047ff',
        "secondary-4": '#db00ff',
      },
      fontFamily: {
        "type-1": 'a',
        "type-2": 'b',
        "type-3": 'c',
      }
    },
  },
  plugins: [],
} satisfies Config
