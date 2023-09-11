'use client'

import { useStoryblokApi } from '@storyblok/react'
import { useEffect, useState } from 'react'

export type Post = {
  name: string
  first_published_at: string
  content: { summary: string }
  slug: string
}

export function usePostList(
  count: number,
  startDate: string,
  endDate: string,
  preloaded: Post[] = [],
) {
  const storyblokApi = useStoryblokApi()
  const [posts, setPosts] = useState(preloaded)
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    ;(async () => {
      setIsPending(true)

      const {
        data: { stories },
      } = await storyblokApi.get('cdn/stories', {
        sort_by: 'first_published_at:desc',
        ...(startDate && { first_published_at_gt: startDate }),
        ...(endDate && { first_published_at_lt: endDate }),
        starts_with: 'blog',
        is_startpage: false,
        version: 'published',
        per_page: count,
      })

      if (stories instanceof Array) {
        setPosts(stories)
      }

      setIsPending(false)
    })()
  }, [count, startDate, endDate])

  return [posts, isPending] as const
}
