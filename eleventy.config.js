import eleventyNavigation from "@11ty/eleventy-navigation";
    /**
     * Plugins
     */
    eleventyConfig.addPlugin(eleventyNavigation);

    return {
        dir: {
            input: "src"
        }
    }
}