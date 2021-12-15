import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { W, theme } from "styles"

const HeroImage = ({ data }) => {
  const { src, alt } = data
  return (
    <Wrapper>
      <ImageWrapper>
        <GatsbyImage image={getImage(src)} alt={alt} />
      </ImageWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(W.ContainerMax)``
const ImageWrapper = styled.div`
  position: relative;

  ${theme.margin.heroImage}
  .gatsby-image-wrapper {
    z-index: 1;
    overflow: hidden;
    border-radius: 10px;
  }
  &:after {
    position: absolute;
    bottom: -7px;
    left: -30px;
    z-index: 2;
    width: 71px;
    height: 66px;
    background-image: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 143 132'%3E%3Cpath d='M13.5 132v-12h-1.627C8.498 123.98 4.942 127.296 0 130.131V132h13.5ZM56.5 132v-12h-1.627c-3.375 3.98-6.931 7.296-11.873 10.131V132h13.5ZM99.5 132v-12h-1.627c-3.375 3.98-6.931 7.296-11.873 10.131V132h13.5ZM143 132v-12h-1.687c-3.501 3.98-7.188 7.296-12.313 10.131V132h14ZM35 132v-12h-1.627c-3.375 3.98-6.931 7.296-11.873 10.131V132H35ZM78 132v-12h-1.627c-3.375 3.98-6.931 7.296-11.873 10.131V132H78ZM121 132v-12h-1.627c-3.375 3.98-6.931 7.296-11.873 10.131V132H121ZM35 112v-12h-1.627c-3.375 3.98-6.931 7.296-11.873 10.131V112H35ZM78 112v-12h-1.627c-3.375 3.98-6.931 7.296-11.873 10.131V112H78ZM121 112v-12h-1.627c-3.375 3.98-6.931 7.296-11.873 10.131V112H121ZM56.5 112v-12h-1.627c-3.375 3.98-6.931 7.296-11.873 10.131V112h13.5ZM99.5 112v-12h-1.627c-3.375 3.98-6.931 7.296-11.873 10.131V112h13.5ZM143 112v-12h-1.687c-3.501 3.98-7.188 7.296-12.313 10.131V112h14ZM78 92V80h-1.627c-3.375 3.98-6.931 7.296-11.873 10.13V92H78ZM121 92V80h-1.627c-3.375 3.98-6.931 7.296-11.873 10.13V92H121ZM99.5 72V60h-1.627C94.498 63.98 90.942 67.296 86 70.13V72h13.5ZM121 72V60h-1.627c-3.375 3.98-6.931 7.296-11.873 10.13V72H121ZM143 72V60h-1.687c-3.501 3.98-7.188 7.296-12.313 10.13V72h14ZM121 52V40h-1.627c-3.375 3.98-6.931 7.297-11.873 10.13V52H121ZM143 52V40h-1.687c-3.501 3.98-7.188 7.297-12.313 10.13V52h14ZM143 32V20h-1.687c-3.501 3.98-7.188 7.297-12.313 10.13V32h14ZM56.5 92V80h-1.627C51.498 83.98 47.942 87.296 43 90.13V92h13.5ZM99.5 92V80h-1.627C94.498 83.98 90.942 87.296 86 90.13V92h13.5ZM143 92V80h-1.687c-3.501 3.98-7.188 7.296-12.313 10.13V92h14ZM78 72V60h-1.627c-3.375 3.98-6.931 7.296-11.873 10.13V72H78ZM99.5 52V40h-1.627C94.498 43.98 90.942 47.297 86 50.13V52h13.5ZM121 32V20h-1.627c-3.375 3.98-6.931 7.297-11.873 10.13V32H121ZM143 12V0h-1.687c-3.501 3.98-7.188 7.296-12.313 10.13V12h14Z' fill='%236FC9E7'/%3E%3C/svg%3E");
    content: "";
  }

  ${theme.above.laptop} {
    &:after {
      bottom: -14px;
      left: -61px;
      width: 143px;
      height: 132px;
    }
  }
`

export default HeroImage
