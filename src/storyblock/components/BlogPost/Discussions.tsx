import { usePathname } from 'next/navigation'
import { CenteredContent } from '@/components'
import { DiscussionEmbed } from 'disqus-react'
import { BlokProps } from '@/storyblock/components/types'
import { PageBlok } from './types'

export function Discussions({ blok }: BlokProps<PageBlok>) {
  const pathname = usePathname()

  const disqusShortname = 'seantempletonwebdeveloper'
  const disqusConfig = {
    url: 'https://templeton.io' + pathname,
    identifier: blok._uid, // Single post id
    title: blok.short_title, // Single post title
  }

  return (
    <CenteredContent>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </CenteredContent>
  )
}