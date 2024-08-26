import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-dark': '#121212',
        'main-gray': '#2c2c2e',
        'main-blue': '#4a6cf7',
        'main-text': '#79808a',
        'text-accent': '#ffffff',
      },
      fontSize: {
        title: '28px',
        text: '16px',
      },
    },
  },
  plugins: [],
}
export default config
