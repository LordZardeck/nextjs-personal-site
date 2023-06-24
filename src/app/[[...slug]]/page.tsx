import { fetchPageData } from '@/storyblock/api'
import StoryblockStory from '@storyblok/react/story'
import { getStoryblokApi } from '@storyblok/react/rsc'

type HomeProps = {
  params: {
    slug?: string[]
  }
  searchParams: {
    preview?: string
  }
}

async function getLinks(): Promise<any[]> {
  const storyblokApi = getStoryblokApi()

  const { data } = await storyblokApi.get('cdn/links', {
    version:
      (process.env.NEXT_PUBLIC_STORYBLOK_VERSION as 'draft' | 'published') ??
      'draft',
  })
  const links = data ? data.links : null
  return links
}

export async function generateStaticParams() {
  const posts = await getLinks()

  return Object.values(posts)
    .filter(({ slug }) => slug !== 'settings')
    .map(({ slug }) => ({ slug: slug.split('/') }))
}

export default async function StoryblokPage({
  params,
  searchParams,
}: HomeProps) {
  const story = await fetchPageData(params.slug ?? [], searchParams.preview)

  return <StoryblockStory story={story} />
}
