'use client'

import { BlokProps, Component } from '@/storyblock/components/types'
import { ReactNode } from 'react'
import { storyblokEditable } from '@storyblok/react/rsc'
import styled from '@emotion/styled'
import tw from 'twin.macro'

declare module 'csstype' {
  interface Properties {
    '--rotOffset'?: string
    '--p'?: number
    '--c'?: string
    '--r'?: string
  }
}

type SkillBlok = Component<
  {
    name: string
    color: string
    value: string
    logoOffset: string
    logo: {
      id: number
      filename: string
      alt: string
    }
  },
  'skillItem'
>

type SkillsChartBlok = Component<
  {
    skills: SkillBlok[]
    profilePicture: {
      id: number
      alt: string
      name: string
      focus: unknown
      title: string
      filename: string
      copyright: string
      fieldtype: string
    }
    globalRotationOffset: string
  },
  'skillsChart'
>

const StyledSkillsChart = styled.div`
  position: relative;
  margin: 0 auto;
  width: 30%;
  display: flex;
  align-items: center;
`

const StyledSkillAvatar = styled.div`
  ${tw`shadow-[0 0 0 calc(1vw) #202126] md:shadow-[0 0 0 8px #202126]`}
  position: absolute;
  width: 90%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 100%;
  z-index: 1;
  transform: translate(5.4%, 0%);
`

const StyledSkillAvatarImage = styled.img([tw`w-full`])

const StyledSkillsPieParts = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  transform: translate(-2%, -2%);
`

const StyledSkillPie = styled.div`
  --p: 20; /* the percentage */
  --b: 6%; /* the thickness */
  --c: darkred; /* the color */
  --w: 104%; /* the size*/
  --r: 0deg;

  width: var(--w);
  aspect-ratio: 1/1;
  position: absolute;
  display: inline-grid;
  place-content: center;
  font-size: 25px;
  font-weight: bold;
  font-family: sans-serif;
  transform: rotate(var(--r));

  &:before,
  &:after {
    content: '';
    position: absolute;
    border-radius: 50%;
  }

  &:before {
    inset: 0;
    background: radial-gradient(farthest-side, var(--c) 98%, #0000) top/var(--b)
        var(--b) no-repeat,
      conic-gradient(var(--c) calc((var(--p) - 1) * 1%), #0000 0);
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(99% - var(--b)),
      #000 calc(100% - var(--b))
    );
    background-size: 0 0, auto;
    mask: radial-gradient(
      farthest-side,
      #0000 calc(99% - var(--b)),
      #000 calc(100% - var(--b))
    );
  }

  &:after {
    inset: calc(50% - var(--b) / 2);
    background: var(--c);
    transform: rotate(calc(var(--p) * 3.6deg - 90deg))
      translate(calc(var(--w) / 2 - 50%));
    content: none;
  }
`

const StyledSkillsPieLogo = styled.div`
  --rotOffset: -1deg;

  width: 100%;
  position: absolute;
  box-shadow: none;
  background: none;
  border: transparent;
  border-bottom: 2px solid var(--c);
  margin: 0;
  top: 50%;
  left: 50%;
  transform: rotate(var(--rotOffset));
  transform-origin: left;
  z-index: -1;
`

const StyledSkillsPieLogoImage = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  max-width: 35%;
  transform: translate(50%, -50%)
    rotate(calc((var(--r) * -1) - var(--rotOffset)));
`

const StyledSkillsChartContainer = styled.div([
  tw`py-[15%] md:py-24 md:pt-32 px-5 max-w-4xl my-0 mx-auto w-full`,
])

type SkillPieProps = {
  logo: {
    id: number
    filename: string
    alt: string
  }
  skillsCount: number
  rotOffset: number
  skillPercentage: number
  rotation: string
  color: string
}

function SkillPie({
  logo,
  skillsCount,
  rotOffset,
  skillPercentage,
  color,
  rotation,
}: SkillPieProps) {
  return (
    <StyledSkillPie
      style={{
        '--p': skillPercentage * 100 + (skillsCount === 1 ? 1 : 0),
        '--c': color,
        '--r': rotation,
      }}
    >
      {logo.id && (
        <StyledSkillsPieLogo style={{ '--rotOffset': `${rotOffset}deg` }}>
          <StyledSkillsPieLogoImage src={logo.filename} alt={logo.alt} />
        </StyledSkillsPieLogo>
      )}
    </StyledSkillPie>
  )
}

export function SkillsChart({ blok }: BlokProps<SkillsChartBlok>) {
  const { profilePicture, skills, globalRotationOffset } = blok

  const parsedGlobalRotationOffset = parseFloat(globalRotationOffset) || 0

  return (
    <StyledSkillsChartContainer {...storyblokEditable(blok)}>
      <StyledSkillsChart>
        <StyledSkillAvatar>
          <StyledSkillAvatarImage
            src={profilePicture.filename}
            alt={profilePicture.alt}
          />
        </StyledSkillAvatar>
        <StyledSkillsPieParts>
          {(() => {
            const totalValue = skills.reduce(
              (total, { value }) => total + (parseFloat(value) || 0),
              0,
            )

            const [, result] = skills.reduce(
              (
                [sumValue, elements],
                { name, value, color, logo, logoOffset },
                index,
              ) => {
                const parsedValue = parseFloat(value) || 0
                // Calculate the offset as a percentage of the available rotation space, starting at -90deg
                const rotOffset =
                  ((parsedValue / totalValue) * 360 - 4) *
                    (Math.max(0, Math.min(100, parseFloat(logoOffset))) / 100) -
                  90

                return [
                  parsedValue + sumValue,
                  [
                    ...elements,
                    <SkillPie
                      key={name}
                      skillPercentage={parsedValue / totalValue}
                      skillsCount={skills.length}
                      color={color}
                      logo={logo}
                      rotOffset={rotOffset}
                      rotation={
                        index > 0
                          ? `${
                              (sumValue / totalValue) * 360 +
                              parsedGlobalRotationOffset
                            }deg`
                          : `${parsedGlobalRotationOffset}deg`
                      }
                    />,
                  ],
                ]
              },
              [0, [] as ReactNode[]],
            )

            return result
          })()}
        </StyledSkillsPieParts>
      </StyledSkillsChart>
    </StyledSkillsChartContainer>
  )
}
