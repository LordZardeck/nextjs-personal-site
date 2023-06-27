import type { BlokProps } from '@/storyblock/components/types'
import { ClientPostList } from './ClientPostList'
import type { PostList } from './ClientPostList'

export async function PostList({ blok }: BlokProps<PostList>) {
  return <ClientPostList blok={blok} preloaded={[]} />
}