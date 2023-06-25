import { Navigation } from '@/app/layout/Navigation'
import Head from 'next/head'
import GlobalStyles from '@/app/layout/GlobalStyles'
import { AppProps } from 'next/app'
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <GlobalStyles />
      </Head>
      <Navigation links={pageProps.links ?? []} />
      <Component {...pageProps} />
    </>
  )
}
