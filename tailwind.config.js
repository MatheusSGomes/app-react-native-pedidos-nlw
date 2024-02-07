/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: "Inter_400Regular",
        heading: "Inter_600SemiBold",
        subtitle: "Inter_500Medium",
        bold: "Inter_700Bold",
      }
    },
  },
  plugins: [],
}

