import { Component } from '@/storyblock/components/types'

export type PageBlok = Component<
  {
    body?: Component<unknown>[]
    short_title?: string
    languages?: string[]
    featured_image?: string
  },
  'page'
>