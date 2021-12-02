import * as React from "react"
import styled from "styled-components"
// import { PrimaryButton, SecondaryButton } from "./shared/Button"

const StyledCard = styled.div``

const Card = ({
  tag,
  company,
  title,
  image,
  imageAlt,
  logo,
  cta,
  ctaUrl,
  bgColor,
  cite,
  variant,
}) => {
  let citationName
  let citationFounderOf
  if (cite) {
    citationName = cite.split(",")[0]
    citationFounderOf = cite.split(",")[1]
  }
  return (
    <>
      {variant === "wide" && (
        <StyledCard
          className=".squereCardLogoOnly"
          style={{ backgroundColor: `${bgColor}` }}>
          <div>
            <span className="tag">{tag}</span>
            <span className="company">{company}</span>
          </div>
          <h4 className="title">{title}</h4>
          <div className="logo">{logo}</div>
          {cite && (
            <p className="cite">
              <b>{citationName}</b>, {citationFounderOf}
            </p>
          )}
          <div className="cta">
            {cta}
            {ctaUrl}
          </div>
        </StyledCard>
      )}
      {variant === "squereLogoOnly" && (
        <StyledCard
          className=".squereCardLogoOnly"
          style={{ backgroundColor: `${bgColor}` }}>
          <div>
            <span className="tag">{tag}</span>
            <span className="company">{company}</span>
          </div>
          <h4 className="title">{title}</h4>
          <div className="logo">{logo}</div>
          <div className="cta">
            {cta}
            {ctaUrl}
          </div>
        </StyledCard>
      )}
    </>
  )
}

export default Card
