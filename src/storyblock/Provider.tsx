'use client'

import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import { PropsWithChildren } from 'react'
import {
  CenteredSectionContent,
  Page,
  PostList,
  Text,
  SkillsChart,
  BlogPost,
} from './components'

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  bridge: true,
  use: [apiPlugin],
  components: {
    centeredSectionContent: CenteredSectionContent,
    text: Text,
    skillsChart: SkillsChart,
    postList: PostList,
    page: Page,
    blogpost: BlogPost,
  },
})

export default function StoryblokProvider({ children }: PropsWithChildren) {
  return children
}
