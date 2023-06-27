'use client'

import { css, Global } from '@emotion/react'
import tw, { globalStyles } from 'twin.macro'
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

const customStyles = css([
  globalStyles as any,
  {
    '#__next': tw`min-h-[calc(100vh-3rem)] flex flex-col`,
    body: tw`font-text bg-gray-950 pb-12`,
    h1: tw`text-4xl md:text-6xl`,
    h2: tw`text-3xl`,
    h3: tw`text-xl`,
  },
  {
    body: {
      '--font-plex-mono': ibmPlexMono.style.fontFamily,
      '--font-plex-sans': ibmPlexSans.style.fontFamily,
    },
  },
])
const GlobalStyles = () => (
  <>
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
