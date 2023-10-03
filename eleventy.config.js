const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPassthroughCopy("src/styles/");
  // Return your Object options:
  return {
    pathPrefix: "/AccessibilityPlaybook-fs/",
    dir: {
      input: "src",
      output: "site"
    }
  }
};