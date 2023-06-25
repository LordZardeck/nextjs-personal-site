import { ChildComponents } from '@/storyblock/components/ChildComponents'
import { BlokProps, Component } from '@/storyblock/components/types'
import { storyblokEditable } from '@storyblok/react/rsc'
import { StyledMain } from '@/app/[[...slug]]/page.styled'
import styled from '@emotion/styled'
import { usePathname } from 'next/navigation'
import { CenteredContent } from '@/components'
import { DiscussionEmbed } from 'disqus-react'

type PageBlok = Component<
  {
    body: Component<unknown>[]
    languages?: string[]
  },
  'page'
>

const StyledArticleTitle = styled.h1`
  color: #f5d669;
  text-align: center;
  max-width: 1024px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
`

export function BlogPost({ blok }: BlokProps<PageBlok>) {
  const pathname = usePathname()

  const disqusShortname = 'seantempletonwebdeveloper'
  const disqusConfig = {
    url: 'https://templeton.io' + pathname,
    identifier: blok._uid, // Single post id
    title: blok.short_title, // Single post title
  }

  return (
    <StyledMain {...storyblokEditable(blok)}>
      <div className={`${(blok.languages?.length ?? 0) > 0 && 'hasLanguages'}`}>
        {blok.featured_image && (
          <img
            className="featuredImage"
            src={blok.featured_image}
            alt="featured-image"
          />
        )}
        <StyledArticleTitle>{blok.short_title}</StyledArticleTitle>
        <ChildComponents bloks={blok.body} />
        <CenteredContent>
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </CenteredContent>
      </div>
    </StyledMain>
  )
}
