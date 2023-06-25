import type { BlokProps } from '@/storyblock/components/types'
import { loader } from './loader'
import { ClientPostList } from './ClientPostList'
import type { PostList } from './ClientPostList'

export async function PostList({ blok }: BlokProps<PostList>) {
  return <ClientPostList blok={blok} preloaded={[]} />
}