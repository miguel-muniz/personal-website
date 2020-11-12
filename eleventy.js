module.exports = function (eleventyConfig) {
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
            layouts: "_includes/layouts"
        }
    };
};
