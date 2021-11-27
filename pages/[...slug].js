import ModuleDelegator from "../components/common/module-delegator";
import useEditableContent from "../hooks/use-editable-content";
import SbEditable from "storyblok-react";
import Layout from "../components/layout";
import {withDefaultProps} from "../hofs/with-default-props";
import {useRouter} from "next/router";
import LoadingSpinner from "../components/common/loading-spinner";
import Error from "../components/common/error";

export default function AnySlug(props) {
    let {preview, page, pageInfo, settings} = props;

    let content = useEditableContent(page, preview);
    let router = useRouter();

    if (content && !content?.title) content.title = pageInfo?.name;

    return (
        <>
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
