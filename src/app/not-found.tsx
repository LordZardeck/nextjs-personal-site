import {
  StyledContainer,
  StyledGlitchHeader, StyledMessage,
} from '@/app/layout/not-found.styled'

declare module 'csstype' {
  interface Properties {
    '--index'?: number
  }
}

export default function NotFound() {
  return (
    <StyledContainer>
      <StyledGlitchHeader>
        <span style={{ '--index': 0 }}>404</span>
        <span style={{ '--index': 1 }}>404</span>
        <span style={{ '--index': 2 }}>404</span>
      </StyledGlitchHeader>
      <StyledMessage>The content you are looking for doesn&apos;t exist</StyledMessage>
    </StyledContainer>
  )
}
