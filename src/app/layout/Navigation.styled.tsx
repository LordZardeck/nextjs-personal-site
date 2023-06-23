'use client'

import styled from '@emotion/styled'
import tw from 'twin.macro'
import Link from 'next/link'

export const StyledNavigation = styled.nav([
  tw`sticky top-0 w-full h-16 bg-background border-b border-black z-[100]`,
])

export const StyledNavList = styled.ul([
  tw`flex items-center justify-center h-full list-none text-primary font-display`,
])

type StyledNavListLinkProps = {
  active?: boolean
}

export const StyledNavListLink = styled(Link, {
  shouldForwardProp(prop) {
    return prop !== 'active'
  },
})<StyledNavListLinkProps>(({ active = false }) => [
  tw`text-lg text-center px-5 no-underline`,
  active && tw`underline`,
])
