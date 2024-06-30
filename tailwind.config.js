/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,md,mdx}",
		"./src/pages/**/**/*.{js,jsx}",
		"./src/components/**/**/**/*.{js,jsx}",
		"/node_modules/luxeyui/dist/all.min.js"
	],
	theme: {
		extend: {
			colors: {
				primary: "#006FEE",
				success: "#17c964",
				dark: "#101010",
				accent: {
					100: "#9430EE",
					200: "#5C36EE",
					300: "#7153EB"
				},
				neon: { 100: "#6157ff", 200: "#ee49fd" }
			},
			scale: {
				"97": "0.97"
			}
		}
	},
	plugins: [require("@tailwindcss/typography")]
};
