const toml = require("toml");

module.exports = function (eleventyConfig) {
	eleventyConfig.setFrontMatterParsingOptions({
		engines: {
			toml: toml.parse.bind(toml)
		}
	});
	eleventyConfig.setTemplateFormats([
		"yml"
	]);
	return {
		dir: {
			input: "src",
			output: "dist",
			layouts: "_includes/layouts"
		}
	};
};
