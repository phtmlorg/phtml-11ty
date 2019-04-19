import babel from 'rollup-plugin-babel';

const input = 'src/index.js';
const output = [
	{ file: 'index.js', format: 'cjs', strict: false },
	{ file: 'index.mjs', format: 'esm', strict: false }
];
const plugins = [
	babel()
];

export default { input, output, plugins };
