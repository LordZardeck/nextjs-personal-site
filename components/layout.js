import GlobalStyles from "../styles/global-styles";
import Navigation from "./common/navigation";
import PreviewIndicator from "./common/preview-indicator";
import StoryblokBridge from "./common/storyblok-bridge";
import Head from "next/head";

export default function Layout(
    {
        children,
        page,
        error,
        devMode,
        preview,
        settings,
    }
) {
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

            <GlobalStyles/>

            <Navigation settings={settings}/>

            <div className="layout">{children}</div>

            {preview && (
                <>
                    <PreviewIndicator dev={devMode}/>
                </>
            )}
        </>
    );
}
