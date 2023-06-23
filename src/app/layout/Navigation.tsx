'use client'

import {
  StyledNavigation,
  StyledNavList,
  StyledNavListLink,
} from '@/app/layout/Navigation.styled'
import { usePathname } from 'next/navigation'

type NavigationLink = {
  _uid: string
  name: string
  link: {
    url: string
  }
}

type NavigationProps = {
  links: NavigationLink[]
}

export function Navigation({ links }: NavigationProps) {
  const pathname = usePathname()

  return (
    <StyledNavigation>
      <StyledNavList>
        {links.map(({ _uid, name, link }) => (
          <li key={_uid}>
            <StyledNavListLink href={link.url} active={pathname === link.url}>
              {name}
            </StyledNavListLink>
          </li>
        ))}
      </StyledNavList>
    </StyledNavigation>
  )
}
