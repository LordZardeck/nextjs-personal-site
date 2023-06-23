import { StyledBody } from '@/app/layout/layout.styled'
import StoryblokProvider from '@/storyblock/Provider'
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'
import { fetchPageSettings } from '@/storyblock/api'
import { Navigation } from '@/app/layout/Navigation'
import GlobalStyles from '@/app/layout/GlobalStyles'

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
})

import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})
const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-plex-sans',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500'],
})

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
      </head>
      <StoryblokProvider>
        <StyledBody
          className={[ibmPlexSans.variable, ibmPlexMono.variable].join(' ')}
        >
          <Navigation
            links={pageSettings.main_navigation ?? []}
            activePath="/"
          />
          {children}
        </StyledBody>
      </StoryblokProvider>
    </html>
  )
}
