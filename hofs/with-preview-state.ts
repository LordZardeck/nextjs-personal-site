import {GetStaticProps} from 'next';

export function withPreviewState(getProps: GetStaticProps): GetStaticProps {
  return async (ctx) => {
    let isDev = process.env.NODE_ENV === "development";

    ctx.preview = ctx.preview || isDev;

    let data = await getProps(ctx);

    data.props.preview = ctx.preview;
    data.props.devMode = isDev;

    return data;
  };
}
