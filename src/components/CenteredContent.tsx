import { styled } from '@system/jsx'

export const CenteredContent = styled('div', {
  base: {
    paddingY: {
      base: 5,
      md: 12,
    },
    paddingX: 5,
    maxWidth: '4xl',
    marginY: 0,
    marginX: 'auto',
    width: 'full',
  },
  variants: {
    noPadding: {
      true: {
        paddingY: 0,
      },
    },
  },
})
