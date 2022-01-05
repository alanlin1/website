import React from "react"
import styled, { css } from "styled-components"

import { Section, SectionHeader } from "./../../components"
import T from "./../../styles/new/typography"
import { theme } from "./../../styles/new/theme"

const SectionWeValue = ({ data }) => {
  const { title, description, blocks } = data
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <HeadingWrapper>
            <SectionHeader title={title} description={description} />
          </HeadingWrapper>
          <Grid>
            {blocks.map((value, index) => (
              <Value key={index}>
                <Title as="h3">{value.title}</Title>
                <Description>{value.text}</Description>
              </Value>
            ))}
          </Grid>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionWeValue

const Title = styled(T.H4)`
  margin-bottom: 16px;
`
const Description = styled(T.Body)``

const Wrapper = styled.div`
  max-width: 1570px;
  margin: 0 auto;
  background-color: ${theme.color.background.emphesized};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ContentWrapper = styled.div`
  max-width: 1270px;
  margin: 0 40px;
  padding: 80px 0;
`
const HeadingWrapper = styled.div`
  margin-bottom: 64px;
  text-align: center;
`

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 24px;
  row-gap: 24px;

  ${theme.above.t.s} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
    row-gap: 40px;
  }
  ${theme.above.l.m} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 64px;
    row-gap: 64px;
  }
`
const Value = styled.li`
  /* display: grid;
  grid-template-rows: auto;


  theme.above.tablet} {
    grid-template-columns: 100px auto;
    column-gap: 24px;
  }
  theme.above.laptop} {
    grid-template-columns: 160px auto;
    column-gap: 40px;
  } */
`
