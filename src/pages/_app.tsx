import '../styles/global.css'
import { Navigation } from '@/app/layout/Navigation'
import { AppProps } from 'next/app'
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'
import React from 'react'
import Script from 'next/script'

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-3C48B6PE0R" />
      <Script id="google-analytics">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-3C48B6PE0R');
        `}</Script>
      <Navigation links={pageProps.links ?? []} />
      <Component {...pageProps} />
    </>
  )
}
