import ModuleDelegator from "../common/module-delegator";
import {DiscussionEmbed} from "disqus-react"
import {useRouter} from "next/router";
import Head from "next/head";
import CenteredSection from "../common/centered-section";

export default function BlogPostModule({body, featured_image, title, _uid, metadata}) {
    const router = useRouter();

    const disqusShortname = "seantempletonwebdeveloper";
    const disqusConfig = {
        url: "https://templeton.io" + router.asPath,
        identifier: _uid, // Single post id
        title: title // Single post title
    }

    return (
        <>
            <Head>
                <meta name="author" content="Sean Templeton"/>
                <meta property="og:locale" content="en"/>
                <meta property="og:site_name" content={metadata?.title || "Sean Templeton: Web Developer"}/>
                <title>{metadata?.title || "Sean Templeton: Web Developer"}</title>
                <link rel="canonical" href={`https://templeton.io${router.asPath}`}/>
                <meta property="og:url" content={`https://templeton.io${router.asPath}`}/>
                <meta property="og:type" content="article"/>
                {
                    metadata &&
                    <>
                        <meta name="description" content={metadata.description}/>
                        <meta property="og:description" content={metadata.description}/>
                        <meta property="og:title" content={metadata.title}/>
                    </>
                }
                {featured_image && <meta property="og:image" content={featured_image}/>}
            </Head>
            <div className="page">
                {featured_image && <img className="featuredImage" src={featured_image} alt="featured-image"/>}
                <h1>{title}</h1>
                <ModuleDelegator modules={body}/>
                <CenteredSection>
                    <DiscussionEmbed
                        shortname={disqusShortname}
                        config={disqusConfig}
                    />
                </CenteredSection>
            </div>
            <style jsx>{`
              .featuredImage {
                width: 100%;
                margin-bottom: 100px;
              }

              h1 {
                color: #F5D669;
                text-align: center;
                font-size: 60px;
                max-width: 1024px;
                width: 100%;
                margin-left: auto;
                margin-right: auto;
                padding: 0 20px;
              }

              @media (max-width: 900px) {
                .featuredImage {
                  margin-bottom: 30px;
                }

                h1 {
                  font-size: 40px;
                }
              }
            `}</style>
        </>
    );
}