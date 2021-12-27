import ModuleDelegator from "../common/module-delegator";
import {DiscussionEmbed} from "disqus-react"
import {useRouter} from "next/router";
import Head from "next/head";
import CenteredSection from "../common/centered-section";

export default function BlogPostModule({body, featured_image, title, _uid, metadata, languages = []}) {
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
                <div className={`wrapper ${languages.length > 0 && 'hasLanguages'}`}>
                    <div className="content">
                        {featured_image && <img className="featuredImage" src={featured_image} alt="featured-image"/>}
                        <h1 className="articleTitle">{title}</h1>
                        <ModuleDelegator modules={body}/>
                        <CenteredSection>
                            <DiscussionEmbed
                                shortname={disqusShortname}
                                config={disqusConfig}
                            />
                        </CenteredSection>
                    </div>
                </div>
            </div>
            <style jsx>{`
              .featuredImage {
                width: 100%;
                margin-bottom: 100px;
              }

              h1.articleTitle {
                color: #F5D669;
                text-align: center;
                font-size: 60px;
                max-width: 1024px;
                width: 100%;
                margin-left: auto;
                margin-right: auto;
                padding: 0 20px;
              }

              .wrapper {
                display: flex;
              }

              .content {
                order: 1;
                flex: 1 1 100%;
                width: calc(100% - 180px);
              }

              .title {
                order: 2;
                border-left: 2px solid #000;
                flex: 0 0 90px;
                width: 90px;
              }

              .social {
                order: 0;
                border-right: 2px solid #000;
                flex: 0 0 90px;
              }

              .title span {
                display: block;
                color: #FFF;
                text-transform: uppercase;
                font-size: 40px;
                max-width: 1024px;
                width: 100%;
                margin-left: auto;
                margin-right: auto;
                writing-mode: vertical-rl;
                height: calc(100vh - 110px);
                transform: rotate(180deg);
                padding: 20px 17px 0 0;
                text-align: left;
                position: sticky;
                top: 60px;
                background: #202126;
              }

              .hasLanguages .title:before {
                content: '';
                display: block;
                position: absolute;
                width: 0;
                height: 0;
                border-top: 88px solid transparent;
                border-bottom: 88px solid transparent;
                border-right: 88px solid #000;
                top: 22px;
                right: 2px;
              }

              .hasLanguages .title:after {
                content: '';
                display: block;
                position: absolute;
                width: 0;
                height: 0;
                border-top: 88px solid transparent;
                border-bottom: 88px solid transparent;
                border-right: 88px solid #202126;
                top: 22px;
              }

              .hasLanguages .social:before {
                content: '';
                display: block;
                position: absolute;
                width: 0;
                height: 0;
                border-top: 88px solid transparent;
                border-bottom: 88px solid transparent;
                border-left: 88px solid #000;
                top: 22px;
                left: 2px;
              }

              .hasLanguages .social:after {
                content: '';
                display: block;
                position: absolute;
                width: 0;
                height: 0;
                border-top: 88px solid transparent;
                border-bottom: 88px solid transparent;
                border-left: 88px solid #202126;
                top: 22px;
              }

              .social ul {
                height: calc(100vh - 60px);
                background: #202126;
                padding: 0;
                margin: 0;
                z-index: 1;
                position: sticky;
                top: 60px;
              }

              .languages {
                margin: 0;
                padding: 0;
                display: flex;
                height: 50px;
                border-bottom: 1px solid #000;
              }

              .languages li {
                flex: 1 1 auto;
              }

              .languages :global(.php) {
                background: #B769F5;
              }

              .languages :global(.javascript) {
                background: #F5E969;
              }

              .languages :global(.reactjs) {
                background: #00C2E5;
              }

              .languages :global(.laravel) {
                background: #F56969;
              }

              .languages :global(.magento) {
                background: #F07948;
              }

              .languages :global(.bigcommerce) {
                background: #8769F5;
              }

              .languages :global(.nodejs) {
                background: #4C9F44;
              }

              @media (max-width: 900px) {
                .featuredImage {
                  margin-bottom: 30px;
                }

                h1.articleTitle {
                  font-size: 40px;
                }

                .title, .social {
                  display: none;
                }
              }
            `}</style>
        </>
    );
}
