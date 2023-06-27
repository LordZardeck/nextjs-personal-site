'use client'

import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import tw from 'twin.macro'
import Link from 'next/link'
import { ComponentProps, PropsWithChildren, ReactNode } from 'react'

const StyledWrapper = styled(Link)([
  tw`flex flex-col text-white w-full pt-4 first-of-type:pt-0 border-t border-t-gray-700 first-of-type:border-none`,
])
const StyledTitle = styled.h2([tw`text-lg flex items-center gap-2 mb-1`])
const StyledTitleText = styled.span([
  tw`group-hover:underline whitespace-nowrap overflow-ellipsis overflow-hidden`,
])
const StyledDate = styled.span([
  tw`text-xs text-secondary-300 font-display min-w-fit ml-8`,
])

type CodingArticleListItemProps = {
  icon: ReactNode
  title: string
  date: string
} & ComponentProps<typeof StyledWrapper>

export function Item({
  icon,
  title,
  date,
  ...props
}: CodingArticleListItemProps) {
  return (
    <StyledWrapper className="group" {...props}>
      <StyledTitle>
        {icon}
        <StyledTitleText>{title}</StyledTitleText>
      </StyledTitle>
      <StyledDate>{date}</StyledDate>
    </StyledWrapper>
  )
}
