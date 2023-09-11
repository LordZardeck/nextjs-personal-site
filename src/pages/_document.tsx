import { Html, Head, Main, NextScript } from 'next/document'
import { ibmPlexSans, ibmPlexMono } from '@/styles/fonts'

export default function Document() {
  return (
    <Html
      lang="en"
      className={[
        ibmPlexSans.className,
        ibmPlexSans.variable,
        ibmPlexMono.variable,
      ].join(' ')}
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
