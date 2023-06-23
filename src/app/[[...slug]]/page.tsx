import { fetchPageData } from '@/storyblock/api'
import StoryblockStory from '@storyblok/react/story'

type HomeProps = {
  params: {
    slug?: string[]
  }
  searchParams: {
    preview?: string
  }
}

export default async function StoryblokPage({
  params,
  searchParams,
}: HomeProps) {
  const story = await fetchPageData(params.slug ?? [], searchParams.preview)

  return <StoryblockStory story={story} />
}
