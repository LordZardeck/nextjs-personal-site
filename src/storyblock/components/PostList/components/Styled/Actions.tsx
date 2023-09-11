import { styled } from '@system/jsx'

export const Actions = styled('div', {
  base: {
    width: {
      base: '100%',
      md: '78px',
    },
    height: {
      base: '30px',
      md: '100%',
    },
    fontFamily: 'display',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '16px',
    textAlign: 'center',
    color: 'white',
    display: 'flex',
    flexDirection: {
      base: 'row-reverse',
      md: 'column',
    },
    justifyContent: {
      base: 'space-between',
      md: 'initial',
    },

    '& > div': {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: {
        base: 'row',
        md: 'column',
      },
      padding: {
        base: '7px 19px',
        md: '0',
      },
    },

    '& > div > *': {
      display: {
        md: 'block',
      },
    },

    '& svg': {
      fontSize: {
        base: '14px',
        md: '24px',
      },
    },
  },
})
