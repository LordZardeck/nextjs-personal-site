'use client'

import { marked, Renderer } from 'marked'
import hljs from 'highlight.js'
import { storyblokEditable } from '@storyblok/react/rsc'
import { BlokProps, Component } from '@/storyblock/components/types'
import styled from '@emotion/styled'
import 'highlight.js/styles/codepen-embed.css'
import tw from 'twin.macro'

const escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

function escapeForHTML(input: string) {
  return input.replace(
    /([&<>'"])/g,
    char => escapeMap[char as keyof typeof escapeMap],
  )
}

// Create your custom renderer.
const renderer = new Renderer()
renderer.code = (code, language) => {
  // Check whether the given language is valid for highlight.js.
  const validLang = !!(language && hljs.getLanguage(language))

  // Highlight only if the language is valid.
  // highlight.js escapes HTML in the code, but we need to escape by ourselves
  // when we don't use it.
  const highlighted = validLang
    ? hljs.highlight(language, code).value
    : escapeForHTML(code)

  // Render the highlighted code with `hljs` class.
  return `<pre><code class='hljs ${language}'>${highlighted}</code></pre>`
}

// Set the renderer to marked.
marked.setOptions({ renderer, headerIds: false, mangle: false })

type TextBlok = Component<{ content: string }, 'text'>

const StyledText = styled.div`
  color: #fff;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.04em;

  p {
    margin: 35px 0;
    letter-spacing: 0.7px;
    line-height: 1.4;
    word-break: break-word;
  }

  h2 {
    color: #69f5ab;
    text-transform: uppercase;
    border-bottom: 2px solid #69f5ab;
    margin: 90px 0 40px;
    font-weight: 500;

    &:after {
      display: block;
      content: '';
      width: 155px;
      height: 7px;
      background: #69f5ab;
      position: relative;
      top: 9px;
    }
  }

  h3 {
    ${tw`my-4`}
    color: #f5d669;
  }

  h2:nth-of-type(2n) {
    text-align: right;

    &:after {
      margin-left: auto;
    }
  }

  pre code {
    padding: 2em;
    border: 1px solid #000;
    letter-spacing: initial;
    font-family: var(--font-plex-mono);
    line-height: initial;
  }

  img {
    max-width: 100%;
    margin: 0 auto;
  }

  a {
    color: #f5d669;
  }

  @media (max-width: 900px) {
    h2 {
      margin: 40px 0 20px;
      font-size: 1.4em;

      &:after {
        width: 105px;
        height: 4px;
        top: 6px;
      }
    }
  }
`

export function Text({ blok }: BlokProps<TextBlok>) {
  return (
    <StyledText
      dangerouslySetInnerHTML={{ __html: marked.parse(blok.content) }}
      {...storyblokEditable(blok)}
    />
  )
}
