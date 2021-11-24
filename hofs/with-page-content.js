export function withPageContent(getProps) {
  return async (ctx) => {
    let data = await getProps(ctx);

    let { params, preview } = ctx;

    let page = null;
    let pageInfo = null;
    let storyblok = (await import("../lib/storyblok")).default;

    let slug = params?.slug || ["home"];

    try {
      let resp = await storyblok.get("cdn/stories/" + slug.join('/'), {}, preview);
      pageInfo = resp?.data?.story || {}
      page = resp?.data?.story?.content || {};
    } catch (err) {

      data.props.error = {
        statusCode: 404,
      };
    }

    data.props.page = page;
    data.props.pageInfo = pageInfo;

    return data;
  };
}
