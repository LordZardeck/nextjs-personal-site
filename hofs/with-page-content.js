export function withPageContent(getProps) {
    return async (ctx) => {
        const {params, preview} = ctx;
        const [data, {default: storyblok}] = await Promise.all([getProps(ctx), await import("../lib/storyblok")]);
        const slug = (params?.slug || ["home"]).join('/');

        const urlsToAttempt = [
            slug,
            'blog/' + slug
        ];

        for (let urlToAttempt of urlsToAttempt) {
            try {
                const response = await storyblok.get('cdn/stories/' + urlToAttempt, {}, preview);

                return {
                    ...data,
                    props: {
                        ...data.props,
                        page: response?.data?.story?.content || {},
                        pageInfo: response?.data?.story || {},
                    }
                };
            } catch (err) {
            }
        }

        return {
            ...data,
            props: {
                ...data.props,
                error: {
                    statusCode: 404
                }
            }
        }
    };
}
