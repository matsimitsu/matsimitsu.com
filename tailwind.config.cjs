module.exports = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts,svx}",
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
};
