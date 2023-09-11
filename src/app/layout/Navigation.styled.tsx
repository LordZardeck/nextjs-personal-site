import Link from 'next/link'
import { styled } from '@system/jsx'

export const StyledNavigation = styled('nav', {
  base: {
    position: 'sticky',
    top: 0,
    width: 'full',
    height: 16,
    backgroundColor: 'background',
    borderBottom: '1px solid',
    borderColor: 'black',
    zIndex: 100,
  },
})

export const StyledNavList = styled('ul', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    listStyle: 'none',
    color: 'primary.300',
    fontFamily: 'display',
    fontWeight: 500,
  },
})

export const StyledNavListLink = styled(Link, {
  base: {
    fontSize: '1.125rem',
    textAlign: 'center',
    padding: '0 1.25rem',
    textDecoration: 'none',
  },
  variants: {
    active: {
      true: {
        textDecoration: 'underline',
      },
    },
  },
})
