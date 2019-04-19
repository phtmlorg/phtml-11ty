import phtml from 'phtml';

export default {
	initArguments: {},
	configFunction (eleventyConfig, options) {
		const uses = [].concat(Object(options).use || []);

		eleventyConfig.addTransform('phtml', function (content, outputPath) {
			if (outputPath.endsWith('.html')) {
				return phtml.use(...uses).process(content, {
					from: outputPath,
					to: outputPath
				}).then(result => result.html);
			}

			return content;
		});
	}
}
