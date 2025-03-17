export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addGlobalData('layout', 'default.html');
}

export const config = {
    dir: {
      layouts: "_layouts"
    }
}