import { storyblokEditable } from '@storyblok/react/rsc'
import { BlokProps, Component } from '@/storyblock/components/types'
import { ChildComponents } from '@/storyblock/components/ChildComponents'
import { CenteredContent } from '@/components'
import { StyledSectionHeader } from './Styled'

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
    <CenteredContent {...storyblokEditable(blok)}>
      {blok.header && (
        <StyledSectionHeader alignment={blok.headerAlignment}>
          {blok.header}
        </StyledSectionHeader>
      )}
      <ChildComponents bloks={blok.content} />
    </CenteredContent>
  )
}
