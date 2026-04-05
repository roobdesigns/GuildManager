/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Estos colores te ayudarán a igualar las imágenes de Throne & Liberty
        tank: '#2563eb',
        healer: '#16a34a',
        dps: '#dc2626',
        darkBg: '#0f111a',
        darkCard: '#1a1d23',
      }
    },
  },
  plugins: [],
}