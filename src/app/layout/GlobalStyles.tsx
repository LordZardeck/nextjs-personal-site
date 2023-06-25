'use client'

import { css, Global } from '@emotion/react'
import tw, { globalStyles } from 'twin.macro'

const customStyles = css([
  globalStyles as any,
  { body: tw`font-text`, h1: tw`text-6xl`, h2: tw`text-3xl`, h3: tw`text-xl` },
])
const GlobalStyles = () => (
  <>
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
