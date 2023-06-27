import { ChildComponents } from '@/storyblock/components/ChildComponents'
import { BlokProps } from '@/storyblock/components/types'
import { storyblokEditable } from '@storyblok/react/rsc'
import { StyledMain } from '@/app/[[...slug]]/page.styled'
import { StyledArticleTitle } from './Styled'
import type { PageBlok } from './types'
import { Discussions } from './Discussions'

export function BlogPost({ blok }: BlokProps<PageBlok>) {
  return (
    <StyledMain {...storyblokEditable(blok)}>
      {blok.featured_image && (
        <img
          className="featuredImage"
          src={blok.featured_image}
          alt="featured-image"
        />
      )}
      <StyledArticleTitle>{blok.short_title}</StyledArticleTitle>
      <ChildComponents bloks={blok.body ?? []} />
      <Discussions blok={blok} />
    </StyledMain>
  )
}
