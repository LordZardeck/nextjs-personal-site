import { styled } from '@system/jsx'

export const Item = styled('div', {
  base: {
    border: '1px solid',
    borderColor: 'black',
    width: 'full',
    display: 'flex',
    cursor: 'pointer',
    backgroundColor: 'gray.900',
    marginBottom: 6,
    flexDirection: {
      base: 'column',
      md: 'row',
    },
    height: {
      base: 'auto',
      md: '173px',
    },
  },
})
