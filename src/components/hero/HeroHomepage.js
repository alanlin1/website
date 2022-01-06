import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import { Button } from "./../../components/"
import T from "./../../styles/new/typography"
import { Triangle } from "./../../styles/utils"
import { theme } from "./../../styles/new/theme"

const HeroHomepage = ({ data }) => {
  const { title, description, primaryBtn, secondaryBtn } = data
  return (
    <HeroWrapper>
      <Wrapper>
        <TextWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <ButtonWrapper>
            <Button to={primaryBtn.url} variant="primary" size="large">
              {primaryBtn.text}
            </Button>
            <Button to={secondaryBtn.url} variant="secondary" size="large">
              {secondaryBtn.text}
            </Button>
          </ButtonWrapper>
        </TextWrapper>
        <ImageWrapper>
          <LeftImage>
            <StaticImage
              src="./../../images/hero-homepage/person-left.jpg"
              alt="Person smiling"
            />
          </LeftImage>
          <RightImage>
            <StaticImage
              src="./../../images/hero-homepage/person-right.jpg"
              alt="Person smiling"
            />
          </RightImage>
        </ImageWrapper>
      </Wrapper>
    </HeroWrapper>
  )
}

export default HeroHomepage

const Title = styled(T.H1)``
const Description = styled(T.BodyLarge)``

const LeftImage = styled.div`
  position: relative;
  width: 56.875%;
  border-radius: 10px;
  /* overflow: hidden; */
  box-shadow: 0px 100px 80px rgba(1, 14, 25, 0.07),
    0px 41.7776px 33.1139px rgba(1, 14, 25, 0.0503198),
    0px 22.3363px 16.2366px rgba(1, 14, 25, 0.0417275),
    0px 12.5216px 7.80488px rgba(1, 14, 25, 0.035),
    0px 6.6501px 3.28033px rgba(1, 14, 25, 0.0282725),
    0px 2.76726px 0.952807px rgba(1, 14, 25, 0.0196802);
  ${Triangle}
  &:after {
    z-index: 3;
  }

  .gatsby-image-wrapper {
    position: relative;
    z-index: 1;
    overflow: hidden;
    border-radius: 10px;
  }
  ${theme.above.t.s} {
    position: absolute;
    top: 0;
    left: 0;
    width: 56.875%;
  }
`
const RightImage = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 56.875%;
  position: relative;
  position: absolute;
  top: 0;
  top: 20px;
  left: 43%;

  box-shadow: 0px 100px 80px rgba(1, 14, 25, 0.07),
    0px 41.7776px 33.1139px rgba(1, 14, 25, 0.0503198),
    0px 22.3363px 16.2366px rgba(1, 14, 25, 0.0417275),
    0px 12.5216px 7.80488px rgba(1, 14, 25, 0.035),
    0px 6.6501px 3.28033px rgba(1, 14, 25, 0.0282725),
    0px 2.76726px 0.952807px rgba(1, 14, 25, 0.0196802);
  .gatsby-image-wrapper {
    position: relative;
    z-index: 1;
    overflow: hidden;
    border-radius: 10px;
  }
  ${theme.above.t.s} {
    position: absolute;
    top: 112px;
    top: 20%;
    left: 276px;
    left: 43%;
    width: 56.875%;
  }
`
const ImageWrapper = styled.div`
  height: 100%;
  position: relative;
  top: 0;
  ${theme.above.t.s} {
    top: -16px;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
  max-width: 1170px;
  margin: 0 auto;
  /* overflow: hidden; */

  ${theme.above.t.s} {
    grid-template-columns: 345px 400px;
    gap: 32px;
  }

  @media (min-width: 880px) {
    grid-template-columns: 1fr 1fr;
  }

  ${theme.above.t.l} {
    grid-template-columns: 470fr 640fr;
    gap: 60px;
  }
`

const HeroWrapper = styled.header`
  background-color: #f2f6fa;
  overflow: visible;
  padding: 48px 24px 48px;

  ${theme.above.t.s} {
    padding: 64px 40px 64px;
    overflow: hidden;
  }

  ${theme.above.t.l} {
    padding: 80px 40px 96px;
    overflow: visible;
  }
  ${theme.above.l.m} {
    padding: 80px 40px 96px;
  }
  ${theme.above.d.l} {
    padding: 140px 40px 96px;
  }
`

const TextWrapper = styled.div`
  ${Description} {
    margin-top: 16px;
  }
`

const ButtonWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  ${theme.above.t.l} {
    flex-direction: row;
  }
`
