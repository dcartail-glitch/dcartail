export default function(eleventyConfig) {
  eleventyConfig.addCollection("artikel", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/artikel/*.md");
  });

  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/script.js");
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
}