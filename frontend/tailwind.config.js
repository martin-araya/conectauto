/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.ts'

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}

