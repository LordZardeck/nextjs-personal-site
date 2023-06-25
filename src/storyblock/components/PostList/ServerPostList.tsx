import type { BlokProps } from '@/storyblock/components/types'
import { loader } from './loader'
import { ClientPostList } from './ClientPostList'
import type { PostList } from './ClientPostList'
import { PostListItem } from '@/storyblock/components/PostList/PostListItem'

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
