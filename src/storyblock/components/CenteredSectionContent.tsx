'use client'

import { storyblokEditable } from '@storyblok/react/rsc'
import { BlokProps, Component } from '@/storyblock/components/types'
import { ChildComponents } from '@/storyblock/components/ChildComponents'
import styled from '@emotion/styled'
import tw from 'twin.macro'

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

type StyledSectionProps = {
  noPadding?: boolean
}

const StyledSection = styled.div<StyledSectionProps>([
  tw`py-5 px-5 max-w-4xl my-0 mx-auto w-full md:py-12`,
  ({ noPadding }) => noPadding && tw`py-0`,
])

type StyledSectionHeaderProps = {
  alignment: 'Left' | 'Center' | 'Right'
}

const StyledSectionHeader = styled.h2<StyledSectionHeaderProps>([
  tw`font-display text-2xl font-semibold uppercase text-primary border-b-2 border-primary mb-5`,
  tw`after:block after:bg-primary after:h-1 after:w-40 relative`,
  tw`md:mb-10 md:text-3xl md:after:h-2 md:after:w-60`,
  ({ alignment }) => {
    switch (alignment) {
      case 'Right':
        return tw`text-right after:ml-auto`
      case 'Left':
      case 'Center':
      default:
        return null
    }
  },
])

export function CenteredSectionContent({
  blok,
}: BlokProps<CenteredSectionBlok>) {
  return (
    <StyledSection
      className={`section ${blok.noPadding && 'noPadding'}`}
      {...storyblokEditable(blok)}
    >
      {blok.header && (
        <StyledSectionHeader alignment={blok.headerAlignment}>
          {blok.header}
        </StyledSectionHeader>
      )}
      <ChildComponents bloks={blok.content} />
    </StyledSection>
  )
}
