export default function(eleventyConfig) {
  // Collection artikel dari src/artikel/*.md
  eleventyConfig.addCollection("artikel", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/artikel/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Passthrough copy file statis
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/script.js");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");

  // Filter tanggal Indonesia
  eleventyConfig.addFilter("formatTanggal", function(date) {
    const d = new Date(date);
    const bulan = ["Januari","Februari","Maret","April","Mei","Juni",
                   "Juli","Agustus","September","Oktober","November","Desember"];
    return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
