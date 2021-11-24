import StoryblokClient from "storyblok-js-client";
import contentConstants from "../constants/content-constants";

class StoryblokService {
    constructor() {
        this.preview = false;
        this.token = contentConstants.storyblokToken;
        this.client = new StoryblokClient({
            accessToken: this.token,
            cache: {
                clear: "auto",
                type: "memory",
            },
        });
    }

    getCacheVersion() {
        return this.client.cacheVersion;
    }

    get(slug, params, preview) {
        params = params || {};

        if (preview || (typeof window !== "undefined" && window.storyblok)) {
            params.version = "draft";
        }

        if (
            typeof window !== "undefined" &&
            typeof window.StoryblokCacheVersion !== "undefined"
        ) {
            params.cv = window.StoryblokCacheVersion;
        }

        return this.client.get(slug, params);
    }

    getList(slug, limit, start, end) {
        let params = {
            per_page: limit,
            sort_by: 'first_published_at:desc',
            ...(start && {first_published_at_gt: start}),
            ...(end && {first_published_at_lt: end}),
            starts_with: slug,
        };

        if (typeof window !== "undefined" && window.storyblok) {
            params.version = "draft";
        }

        if (
            typeof window !== "undefined" &&
            typeof window.StoryblokCacheVersion !== "undefined"
        ) {
            params.cv = window.StoryblokCacheVersion;
        }

        return this.client.getAll('cdn/stories', params);
    }
}

const storyblok = new StoryblokService();

export default storyblok;
