import ModuleDelegator from "../common/module-delegator";
import Head from "next/head";
import {useRouter} from "next/router";

export default function PageModule({body, metadata}) {
    const router = useRouter();

    console.log(metadata);

    return (
        <>
            <Head>
                <meta name="author" content="Sean Templeton"/>
                <meta property="og:locale" content="en"/>
                <meta property="og:site_name" content={metadata?.description || "Sean Templeton: Web Developer"}/>
                <title>{metadata?.description || "Sean Templeton: Web Developer"}</title>
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
            </Head>
            <div className="page">
                <ModuleDelegator modules={body}/>
            </div>
        </>
    );
}