import type { BlokProps } from '@/storyblock/components/types'
import { loader } from './loader'
import { ClientPostList } from './ClientPostList'
import type { PostList } from './ClientPostList'

export async function PostList({ blok }: BlokProps<PostList>) {
  const { startDate, endDate, count } = blok
  const posts = await loader(Number(count), startDate, endDate)

  return <ClientPostList blok={blok} preloaded={posts} />
}
