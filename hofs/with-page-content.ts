import {getPostListContent} from '../components/modules/post-list-module';

export function findComponent(content, componentType) {
    for (const component of content) {
        if (component.component === componentType) return component;
        if (component.content?.length > 0) {
            const foundComponent = findComponent(component.content, componentType);

            if (foundComponent) return foundComponent;
        }
    }

    return undefined;
}

export function withPageContent(getProps) {
    return async (ctx) => {
        const {params, preview} = ctx;
        const [data, {default: storyblok}] = await Promise.all([getProps(ctx), await import('../lib/storyblok')]);
        const slug = (params?.slug || ['home']).join('/');

        const urlsToAttempt = [
            slug,
            'blog/' + slug,
        ];

        for (let urlToAttempt of urlsToAttempt) {
            try {
                const response = await storyblok.get('cdn/stories/' + urlToAttempt, {}, preview);
                const content = response?.data?.story?.content || {};

                if (content.body) {
                    const postLists = findComponent(content.body, 'postList');

                    if (postLists) {
                        const postListContent = await getPostListContent(
                            postLists.count,
                            postLists.startDate,
                            postLists.endDate,
                        );

                        if (postListContent) {
                            postLists.preloaded = postListContent;
                        }
                    }
                }

                return {
                    ...data,
                    props: {
                        ...data.props,
                        page: response?.data?.story?.content || {},
                        pageInfo: response?.data?.story || {},
                    },
                };
            } catch (err) {
                // console.log(err);
            }
        }

        return {
            ...data,
            props: {
                ...data.props,
                error: {
                    statusCode: 404,
                },
            },
        };
    };
}
