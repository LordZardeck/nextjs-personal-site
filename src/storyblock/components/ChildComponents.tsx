import { Component } from '@/storyblock/components/types'
import { StoryblokComponent } from '@storyblok/react/rsc'

export function ChildComponents({ bloks }: { bloks: Component<any>[] }) {
  return (
    <>
      {bloks.map(nestedBlok => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </>
  )
}
