module.exports = function (eleventyConfig) {
    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        excerpt_separator: "---"
    });

    eleventyConfig.setTemplateFormats([
        "yml",
        "png",
        "jpg",
        "jpeg",
        "svg"
    ]);

    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes",
            layouts: "_includes/layouts"
        }
    };
};
