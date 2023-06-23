'use client'

import styled from '@emotion/styled'
import tw from 'twin.macro'

type StyledSectionProps = {
  noPadding?: boolean
}

export const CenteredContent = styled.div<StyledSectionProps>([
  tw`py-5 px-5 max-w-4xl my-0 mx-auto w-full md:py-12`,
  ({ noPadding }) => noPadding && tw`py-0`,
])
