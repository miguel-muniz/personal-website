const toml = require("toml");

module.exports = function (eleventyConfig) {
	eleventyConfig.setFrontMatterParsingOptions({
		engines: {
			toml: toml.parse.bind(toml)
		}
	});
	return {
		dir: {
			input: "src",
			output: "dist",
			layouts: "_includes/layouts"
		}
	};
};
