import '../styles/global.css'
import { StyledBody } from '@/app/layout/layout.styled'
import StoryblokProvider from '@/storyblock/Provider'
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'
import { fetchPageSettings } from '@/storyblock/api'
import { Navigation } from '@/app/layout/Navigation'
import Script from 'next/script'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ibmPlexSans, ibmPlexMono } from '@/styles/fonts'

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
    <html
      lang="en"
      className={[
        ibmPlexSans.className,
        ibmPlexSans.variable,
        ibmPlexMono.variable,
      ].join(' ')}
    >
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3C48B6PE0R" />
        <Script id="google-analytics">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-3C48B6PE0R');
        `}</Script>
      </head>
      <StoryblokProvider>
        <StyledBody>
          <Navigation links={pageSettings.main_navigation ?? []} />
          {children}
        </StyledBody>
      </StoryblokProvider>
    </html>
  )
}

export const dynamicParams =
  process.env.NEXT_PUBLIC_STORYBLOK_VERSION === 'draft'
