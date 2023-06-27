import { storyblokEditable } from '@storyblok/react/rsc'
import { BlokProps, Component } from '@/storyblock/components/types'
import { ChildComponents } from '@/storyblock/components/ChildComponents'
import { Section } from '@/components'

type CenteredSectionBlok = Component<
  {
    title: string
    header: string
    headerAlignment: 'Left' | 'Center' | 'Right'
    portfolioItems: unknown[]
    content: Component<unknown>[]
  },
  'centeredSectionContent'
>

export function CenteredSectionContent({
  blok,
}: BlokProps<CenteredSectionBlok>) {
  return (
    <Section.Centered {...storyblokEditable(blok)}>
      {blok.header && (
        <Section.Header alignment={blok.headerAlignment}>
          {blok.header}
        </Section.Header>
      )}
      <ChildComponents bloks={blok.content} />
    </Section.Centered>
  )
}
