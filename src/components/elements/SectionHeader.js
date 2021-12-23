import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

import T from "../../styles/new/typography"

const SectionHeader = ({ title, description }) => {
  return (
    <Header>
      <Title>{parse(title)}</Title>
      {description && <Description>{parse(description)}</Description>}
    </Header>
  )
}

export default SectionHeader

const Title = styled(T.H2)``
const Description = styled(T.BodyLarge)``

const Header = styled.header``
