const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
module.exports = {
	plugins: [
		require('autoprefixer'),
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		require('tailwindcss/nesting'),
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer
	]
};
