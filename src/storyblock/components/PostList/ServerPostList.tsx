import type { BlokProps, Component } from '@/storyblock/components/types'
import { loader } from './loader'
import { PostListItem } from './PostListItem'

type PostList = Component<
  { count: string; endDate: string; startDate: string },
  'postList'
>

export async function PostList({ blok }: BlokProps<PostList>) {
  const { startDate, endDate, count } = blok
  const posts = await loader(Number(count), startDate, endDate)

  return (
    <>
      {posts.map(
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
