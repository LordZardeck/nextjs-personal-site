'use client'

import styled from '@emotion/styled'
import {keyframes} from '@emotion/react'
import tw from 'twin.macro'

export const StyledContainer = styled.div([
  tw`flex flex-col flex-1 gap-12 items-center justify-center text-white max-w-3xl mx-auto px-4 text-center`,
])

export const StyledMessage = styled.p([tw`text-4xl text-secondary font-display`])

const stackKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%);
    text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
  }
  60% {
    opacity: 0.5;
    transform: translateX(50%);
  }
  80% {
    transform: none;
    opacity: 1;
    text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
  }
  100% {
    text-shadow: none;
  }
`

const glitchKeyframes = keyframes`
  0% {
    text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
    transform: translate(var(--glitch-translate));
  }
  2% {
    text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
  }
  4%, 100% {
    text-shadow: none;
    transform: none;
  }
`

export const StyledGlitchHeader = styled.h1`
  ${tw`text-primary text-9xl`}
  --stacks: 3;
  display: grid;
  grid-template-columns: 1fr;

  & > span {
    font-weight: bold;
    grid-row-start: 1;
    grid-column-start: 1;
    --stack-height: calc(100% / var(--stacks) - 1px);
    --inverse-index: calc(calc(var(--stacks) - 1) - var(--index));
    --clip-top: calc(var(--stack-height) * var(--index));
    --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
    clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
    animation: ${stackKeyframes} 340ms cubic-bezier(.46, .29, 0, 1.24) 1 backwards calc(var(--index) * 120ms), ${glitchKeyframes} 1s ease infinite 2s alternate-reverse;
  }

  & > span:nth-child(odd) {
    --glitch-translate: 8px;
  }

  & > span:nth-child(even) {
    --glitch-translate: -8px;
  }
`
