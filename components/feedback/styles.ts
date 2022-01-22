import { createStitches } from '@stitches/react'

const { styled } = createStitches({
  theme: {
    colors: {
      blue: 'rgba(37, 99, 235, 1)',
    },
    shadows: {
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.4)',
    },
  },

  utils: {
    p: (value: any) => ({
      padding: value,
    }),
    pt: (value: any) => ({
      paddingTop: value,
    }),
    pr: (value: any) => ({
      paddingRight: value,
    }),
    pb: (value: any) => ({
      paddingBottom: value,
    }),
    pl: (value: any) => ({
      paddingLeft: value,
    }),
    px: (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: any) => ({
      margin: value,
    }),
    mt: (value: any) => ({
      marginTop: value,
    }),
    mr: (value: any) => ({
      marginRight: value,
    }),
    mb: (value: any) => ({
      marginBottom: value,
    }),
    ml: (value: any) => ({
      marginLeft: value,
    }),
    mx: (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),
    fs: (value: any) => ({
      fontSize: value,
    }),
    ff: (value: any) => ({
      fontFamily: value,
    }),
    fw: (value: any) => ({
      fontWeight: value,
    }),
    w: (value: any) => ({
      width: value,
    }),
    maxw: (value: any) => ({
      maxWidth: value,
    }),
    h: (value: any) => ({
      height: value,
    }),
    br: (value: any) => ({
      borderRadius: value,
    }),
    bgc: (value: any) => ({
      backgroundColor: value,
    }),
    shadow: (value: any) => ({
      boxShadow: value,
    }),
  },
})

export const ModalContainer = styled('div', {
  position: 'absolute',
  zIndex: 50,
  left: 0,
  top: 0,
  w: 340,
  maxw: '100%',
  bgc: '#eee',
  p: '1rem',
  br: 4,
  shadow: '$2xl',
})

export const ModalHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  mb: '1rem',
})

export const ModalTitle = styled('h5', {
  flexGrow: 1,
  fs: '1rem',
  fw: '600',
})

export const ModalCloseButton = styled('button', {
  color: '#999',
  transition: '120ms',
  '&:hover': {
    color: '#000',
  },
})

export const ModalForm = styled('form', {
  '>* + *': {
    mt: '1rem',
  },
})

export const ModalFormInput = styled('input', {
  fs: '1rem',
  ff: 'inherit',
  fw: 'normal',
  display: 'block',
  w: '100%',
  border: 0,
  p: 8,
  br: 4,
  transition: '120ms',

  variants: {
    tag: {
      textarea: {
        resize: 'none',
      },
      button: {
        bgc: '$blue',
        color: 'white',
        '&:disabled': {
          opacity: 0.5,
          cursor: 'not-allowed',
        },
      },
    },
  },
})
