import { getStoryblokApi } from '@storyblok/react/rsc'

export async function fetchPageData(slug: string[], preview?: string) {
  const storyblokApi = getStoryblokApi()

  try {
    const {
      data: { story },
    } = await storyblokApi.get(
      'cdn/stories/' + [...(slug.length === 0 ? ['home'] : slug)].join('/'),
      { version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION ?? 'published' },
    )

    return story
  } catch (e) {
    if (e && typeof e === 'object' && 'status' in e && e.status === 404) {
      const {
        data: { story },
      } = await storyblokApi.get(
        'cdn/stories/blog/' +
          [...(slug.length === 0 ? ['home'] : slug)].join('/'),
        { version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION ?? 'published' },
      )

      return story
    }

    throw e
  }
}

export async function fetchList(slug: string, start?: string, end?: string) {
  const storyblokApi = getStoryblokApi()

  const {
    data: { stories },
  } = await storyblokApi.getStories({
    sort_by: 'first_published_at:desc',
    ...(start && { first_published_at_gt: start }),
    ...(end && { first_published_at_lt: end }),
    starts_with: slug,
    is_startpage: false,
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION ?? 'published',
  })

  return stories
}

export async function fetchPageSettings() {
  const storyblokApi = getStoryblokApi()

  const {
    data: {
      story: { content },
    },
  } = await storyblokApi.get('cdn/stories/settings', {})

  return content
}
