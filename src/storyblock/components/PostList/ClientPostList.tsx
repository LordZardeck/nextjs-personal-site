import { useEffect, useState } from 'react'
import { BlokProps, Component } from '@/storyblock/components/types'
import { PostListItem } from './PostListItem'
import { loader } from './loader'

type Post = {
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
  const [posts, setPosts] = useState(preloaded)
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    ;(async () => {
      setIsPending(true)

      console.log('requesting client posts')

      const stories = await loader(count, startDate, endDate)

      if (stories instanceof Array) {
        setPosts(stories)
      }

      setIsPending(false)
    })()
  }, [count, startDate, endDate])

  return [posts, isPending] as const
}

export type PostList = Component<
  { count: string; endData: string; startDate: string },
  'postList'
>

type PostListProps = BlokProps<PostList> & { preloaded: Post[] }

export function ClientPostList({ preloaded }: PostListProps) {
  return (
    <>
      {preloaded.map(
        ({
          name: title,
          first_published_at: postedAt,
          content: { summary },
          slug,
        }) => (
          <PostListItem key={slug} {...{ title, summary, postedAt, slug }} />
        ),
      )}
    </>
  )
}
