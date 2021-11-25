import ModuleDelegator from "../components/common/module-delegator";
import useEditableContent from "../hooks/use-editable-content";
import SbEditable from "storyblok-react";
import Layout from "../components/layout";
import {withDefaultProps} from "../hofs/with-default-props";
import {useRouter} from "next/router";
import LoadingSpinner from "../components/common/loading-spinner";
import Error from "../components/common/error";
import {Head} from "next/document";

export default function AnySlug(props) {
    let {preview, page, pageInfo, settings} = props;

    let content = useEditableContent(page, preview);
    let router = useRouter();

    if (content && !content?.title) content.title = pageInfo?.name;

    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
            <Layout {...props}>
                {content && (
                    <SbEditable content={content} key={content?._uid}>
                        <ModuleDelegator modules={[content]}/>
                    </SbEditable>
                )}
                {!content && <Error/>}
            </Layout>

            <LoadingSpinner show={router.isFallback}/>
        </>
    );
}

export const getStaticProps = withDefaultProps((ctx) => {
    return {
        props: {},
        revalidate: 60,
    };
});

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    };
}
