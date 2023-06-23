'use client'

import { css, Global } from '@emotion/react'
import tw, { globalStyles } from 'twin.macro'

const customStyles = css([globalStyles as any, { body: tw`font-text` }])
const GlobalStyles = () => (
  <>
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
