'use client'

import styled from '@emotion/styled'
import tw from 'twin.macro'

export const StyledPostListItem = styled.div`
  ${tw`border border-black flex cursor-pointer mb-6 bg-gray-900`}
  height: 173px;
  width: 100%;
  margin-bottom: 10px;

  @media (max-width: 500px) {
    flex-direction: column;
    height: auto;
  }
`
export const StyledPostDetails = styled.div`
  padding: 19px;
  flex: 1 1 0;
  border-right: 1px solid #000;

  h3 {
    font-family: var(--font-plex-mono);
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    text-transform: uppercase;
    color: #f5d669;
    ${tw`mb-4 mt-1`}
  }

  p {
    font-family: var(--font-plex-sans);
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    ${tw`mb-2 mt-0.5`}
  }

  @media (max-width: 500px) {
    padding: 9px;
    border-right: none;
    border-bottom: 1px solid #000;

    h3 {
      font-size: 17px;
      line-height: 16px;
      letter-spacing: 1px;
    }

    p {
      font-size: 13px;
      line-height: 14px;
    }
  }
`
export const StyledPostActions = styled.div`
  width: 78px;
  font-family: var(--font-plex-mono);
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;

  & > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  svg {
    font-size: 24px;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 30px;
    flex-direction: row-reverse;
    justify-content: space-between;

    & > div {
      display: flex;
      padding: 7px 19px;
      flex-direction: row;
    }

    & > div > * {
      display: block;
    }

    svg {
      font-size: 14px;
    }
  }
`
export const StyledDate = styled.div`
  svg {
    margin-bottom: 5px;
  }

  @media (max-width: 500px) {
    svg {
      margin-bottom: 0;
      margin-right: 5px;
    }
  }
`