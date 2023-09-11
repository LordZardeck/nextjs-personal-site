import { styled } from '@system/jsx'

export const StyledSectionHeader = styled('h2', {
  base: {
    font: 'display',
    fontSize: {
      base: '2xl',
      md: '3xl',
    },
    fontWeight: 'semibold',
    textTransform: 'uppercase',
    color: 'primary.300',
    borderBottomWidth: 2,
    borderBottom: 'primary',
    marginBottom: {
      base: 5,
      md: 10,
    },
    position: 'relative',
    '&:after': {
      content: '""',
      display: 'block',
      backgroundColor: 'primary.300',
      height: {
        base: 1,
        md: 2,
      },
      width: {
        base: 40,
        md: 60,
      },
    },
  },
  variants: {
    alignment: {
      Left: {},
      Center: {},
      Right: {
        textAlign: 'right',
        '&:after': {
          marginLeft: 'auto',
        },
      },
    },
  },
})
