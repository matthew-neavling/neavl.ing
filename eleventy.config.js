import path from "node:path";
import eleventyNavigation from "@11ty/eleventy-navigation";
import markdownAnchorPlugin from "markdown-it-anchor";
import * as sass from "sass";

export default function (eleventyConfig) {
    /**
     * Plugins
     */
    eleventyConfig.addPlugin(eleventyNavigation);

    /**
     * Library Extension
     */

    eleventyConfig.amendLibrary("md", (mdLib) => mdLib
        .use(markdownAnchorPlugin)
    );



    /**
     * Extensions
     */
    eleventyConfig.addExtension("scss", {
        outputFileExtension: "css",
        useLayouts: true,
        compile: async function (inputContent, inputPath) {
            let parsed = path.parse(inputPath);
            if (parsed.name.startsWith("_")) return;

            let result = sass.compileString(inputContent, {
                loadPaths: [parsed.dir || ".", this.config.dir.includes,]
            })

            this.addDependencies(inputPath, result.loadedUrls);

            return async (data) => {
                return result.css
            }
        }
    })

    eleventyConfig.addTemplateFormats("scss");

    return {
        dir: {
            input: "src"
        }
    }
}