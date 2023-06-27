'use client'

import styled from '@emotion/styled'
import tw from 'twin.macro'

type StyledSectionHeaderProps = {
  alignment: 'Left' | 'Center' | 'Right'
}
export const StyledSectionHeader = styled.h2<StyledSectionHeaderProps>([
  tw`font-display text-2xl font-semibold uppercase text-primary-300 border-b-2 border-primary-300 mb-5`,
  tw`after:block after:bg-primary-300 after:h-1 after:w-40 relative`,
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
