import { storyblokEditable } from '@storyblok/react/rsc'
import { StyledMain } from '@/app/[[...slug]]/page.styled'
import { BlokProps, Component } from '@/storyblock/components/types'
import { ChildComponents } from '@/storyblock/components/ChildComponents'

type PageBlok = Component<
  {
    body: Component<unknown>[]
  },
  'page'
>

export function Page({ blok }: BlokProps<PageBlok>) {
  return (
    <StyledMain {...storyblokEditable(blok)}>
      <ChildComponents bloks={blok.body} />
    </StyledMain>
  )
}
