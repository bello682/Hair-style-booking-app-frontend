/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			animation: {
				"ping-once": "ping 0.5s ease-in-out 1",
				"fade-in": "fadeIn 0.3s ease-in-out",
			},
			keyframes: {
				ping: {
					"0%": { transform: "scale(0.9)", opacity: 0.7 },
					"50%": { transform: "scale(1.1)", opacity: 1 },
					"100%": { transform: "scale(1)", opacity: 1 },
				},
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
			},
		},
	},
	plugins: [],
};
