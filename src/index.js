import path from 'path';
import phtml from 'phtml';

export default {
	initArguments: {},
	configFunction (eleventyConfig, options) {
		const useInputPath = Boolean(Object(options).useInputPath);

		eleventyConfig.addTransform('phtml', function transform (content, outputPath, inputPath) {
			if (outputPath.endsWith('.html')) {
				const hasTransformFunction = typeof Object(options.use) === 'object' && typeof Object(Object(options).use).transformFunction === 'function';
				const to = path.resolve(outputPath);
				const from = useInputPath ? path.resolve(inputPath) : to;

				return Promise.resolve(
					hasTransformFunction
						? [].concat(options.use.transformFunction(this) || [])
					: [].concat(Object(options).use || [])
				).then(
					uses => phtml.use(uses).process(content, { from, to }).then(result => result.html)
				);
			}

			return content;
		});
	}
}
