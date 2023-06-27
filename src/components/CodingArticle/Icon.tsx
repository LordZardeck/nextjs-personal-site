'use client'

import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import tw from 'twin.macro'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

export const Icon = styled(FontAwesomeIcon)([tw`text-lg`])
const StyledJsIcon = styled(Icon)([tw`text-brands-js`])
const StyledCodeIcon = styled(Icon)([tw`text-primary-300`])
export const JsIcon = () => <StyledJsIcon className="fa-fw" icon={faJs} />
export const CodeIcon = () => <StyledCodeIcon className="fa-fw" icon={faCode} />