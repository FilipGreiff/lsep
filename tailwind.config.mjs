/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'industrial-black': '#1A1A1A',
        'machine-yellow': '#FFB800',
        'chrome-blue': '#0066CC',  // From logo
        'steel-gray': '#2C3E50',
        'metal-silver': '#BDC3C7',
        'earth-tone': '#8B4513'
      },
      fontFamily: {
        display: ['Roboto Condensed', 'system-ui', 'sans-serif'],
        body: ['Roboto', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'texture': "url('/texture.png')",
        'diagonal': "linear-gradient(45deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)"
      }
    }
  },
  plugins: []
};