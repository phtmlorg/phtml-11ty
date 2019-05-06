module.exports = {
	presets: [
		['@babel/preset-env', {
			corejs: 3,
			loose: true,
			modules: false,
			targets: { node: 8 },
			useBuiltIns: 'entry'
		}]
	]
};
