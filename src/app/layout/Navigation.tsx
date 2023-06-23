import {
  StyledNavigation,
  StyledNavList,
  StyledNavListLink,
} from '@/app/layout/Navigation.styled'

type NavigationLink = {
  _uid: string
  name: string
  link: {
    url: string
  }
}

type NavigationProps = {
  links: NavigationLink[]
  activePath: string
}

export function Navigation({ links, activePath }: NavigationProps) {
  return (
    <StyledNavigation>
      <StyledNavList>
        {links.map(({ _uid, name, link }) => (
          <li key={_uid}>
            <StyledNavListLink href={link.url} active={activePath === link.url}>
              {name}
            </StyledNavListLink>
          </li>
        ))}
      </StyledNavList>
    </StyledNavigation>
  )
}
