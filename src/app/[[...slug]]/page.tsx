import { fetchPageData } from '@/storyblock/api'
import StoryblockStory from '@storyblok/react/story'
import { getStoryblokApi } from '@storyblok/react/rsc'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

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
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION ?? 'published',
  })

  return data ? data.links : null
}

export async function generateMetadata({
  params,
}: HomeProps): Promise<Metadata> {
  const story = await fetchPageData(params.slug ?? [])

  let metadata: Metadata = {
    openGraph: {},
  }

  if (story.content.metadata) {
    if (story.content.metadata.title) {
      metadata.title = story.content.metadata.title
      // @ts-ignore
      metadata.openGraph.title = story.content.metadata.title
    }
    if (story.content.metadata.description) {
      // @ts-ignore
      metadata.openGraph.description = story.content.metadata.description
    }

    if (story.content.metadata.featured_image) {
      // @ts-ignore
      metadata.openGraph.images = [
        story.content.metadata.featured_image.replace(/^(\/\/)/, 'https://'),
      ]
    }
  }

  if (story.full_slug.includes('blog')) {
    // @ts-ignore
    metadata.openGraph.type = 'article'
  }

  return metadata
}

export async function generateStaticParams() {
  const posts = await getLinks()

  return Object.values(posts)
    .filter(
      ({ slug, published, is_folder }) =>
        slug !== 'settings' &&
        (published || process.env.NEXT_PUBLIC_STORYBLOK_VERSION === 'draft') &&
        !is_folder,
    )
    .map(({ real_path }) => ({ slug: real_path.split('/').filter(Boolean) }))
}

export default async function StoryblokPage({ params }: HomeProps) {
  try {
    const story = await fetchPageData(params.slug ?? [])

    return <StoryblockStory story={story} />
  } catch (e) {
    console.log('storyblok not found', e)
    return notFound()
  }
}
