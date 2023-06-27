import { getStoryblokApi } from '@storyblok/react/rsc'

export type Post = {
  name: string
  first_published_at: string
  content: { summary: string }
  slug: string
}

export async function loader(
  count: number,
  startDate: string,
  endDate: string,
): Promise<Post[]> {
  const storyblokApi = getStoryblokApi()

  const {
    data: { stories },
  } = await storyblokApi.get('cdn/stories', {
    sort_by: 'first_published_at:desc',
    ...(startDate && { first_published_at_gt: startDate }),
    ...(endDate && { first_published_at_lt: endDate }),
    starts_with: 'blog',
    is_startpage: false,
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION ?? 'published',
    per_page: count,
  })

  return stories
}
