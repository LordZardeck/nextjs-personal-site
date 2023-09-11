import { styled } from '@system/jsx'

export const Details = styled('div', {
  base: {
    padding: {
      base: '9px',
      md: '19px',
    },
    flex: '1 1 0',
    borderRight: {
      base: 'none',
      md: '1px solid',
    },
    borderColor: 'black',
    borderBottom: {
      base: '1px solid',
      md: 'none',
    },

    '& h3': {
      fontFamily: 'display',
      fontWeight: 500,
      fontSize: {
        base: 'md',
        md: '2xl',
      },
      lineHeight: {
        base: '16px',
        md: '34px',
      },
      letterSpacing: {
        base: '1px',
        md: 'auto',
      },
      textTransform: 'uppercase',
      color: 'secondary',
      marginBottom: 4,
      marginTop: 1,
    },

    '& p': {
      fontFamily: 'text',
      fontWeight: 400,
      fontSize: {
        base: '13px',
        md: '16px',
      },
      lineHeight: {
        base: '14px',
        md: '20px',
      },
      color: 'white',
      marginBottom: 2,
      marginTop: 0.5,
    },
  },
})
