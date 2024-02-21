/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"/node_modules/luxeyui/dist/all.min.js"
	],
	theme: {
		extend: {
			colors: {
			  primary: "#006FEE",
			  accent: {
			    100:"#09FEFE", 
			    200:"#1A1565", 
			  }
			}
		}
	},
	plugins: []
};
