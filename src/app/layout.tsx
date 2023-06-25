import StoryblokProvider from '@/storyblock/Provider'
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'
import { fetchPageSettings } from '@/storyblock/api'
import { Navigation } from '@/app/layout/Navigation'
import GlobalStyles from '@/app/layout/GlobalStyles'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Script from 'next/script'
import React from 'react'

config.autoAddCss = false

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
})

export const metadata = {
  openGraph: {
    siteName: 'Sean Templeton: Software Engineer',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pageSettings = await fetchPageSettings()

  return (
    <html lang="en">
      <head>
        <GlobalStyles />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3C48B6PE0R" />
        <Script id="google-analytics">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-3C48B6PE0R');
        `}</Script>
      </head>
      <StoryblokProvider>
        <body>
          <Navigation links={pageSettings.main_navigation ?? []} />
          {children}
        </body>
      </StoryblokProvider>
    </html>
  )
}

export const dynamicParams = false
