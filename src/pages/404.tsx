import { fetchPageSettings } from '@/storyblock/api'
import NotFoundPage from '@/app/not-found'

declare module 'csstype' {
  interface Properties {
    '--index'?: number
  }
}

export default function NotFound() {
  return <NotFoundPage />
}

export async function getStaticProps() {
  const pageSettings = await fetchPageSettings()

  return {
    props: {
      links: pageSettings.main_navigation ?? [],
    },
  }
}
