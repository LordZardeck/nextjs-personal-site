import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'

export const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})
export const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-plex-sans',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500'],
})
