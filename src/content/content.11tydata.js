export default function () {
    return {
        layout: "layout/default",
        eleventyComputed: {
            permalink: (data) => `/${data.title.toLowerCase()}/index.html`,
            eleventyNavigation: {
                key: (data) => data.title
            }
        }
    }
}