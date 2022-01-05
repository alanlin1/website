import React from "react"
import styled from "styled-components"
// import parse from "html-react-parser"

import { Section, SectionHeader, ThreeColumnIcons } from "./../../components"

import T from "./../../styles/new/typography"
import { theme } from "./../../styles/new/theme"

const SectionRegulated = ({ data, bg }) => {
  const { title, description, blocks, statement } = data
  return (
    <Section>
      <Wrapper bg={bg}>
        <ContentWrapper bg={bg}>
          <HeaderWrapper>
            <SectionHeader title={title} description={description} />
          </HeaderWrapper>

          <TextWrapper>
            {/* <Grid>
              {blocks.map((item, index) => (
                <Block key={index}>
                  <IconWrapper>{parse(item.icon)}</IconWrapper>
                  <BlockTitle as={"h3"}>{item.title}</BlockTitle>
                  <BlockDescription>{item.text}</BlockDescription>
                </Block>
              ))}
            </Grid> */}
            <ThreeColumnIcons blocks={blocks} />
            <StatementWrapper>
              <Statement>{statement}</Statement>
            </StatementWrapper>
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionRegulated

const HeaderWrapper = styled.div`
  text-align: center;
  max-width: 770px;
  margin: 0 auto;
  margin-bottom: 48px;
`
const Wrapper = styled.div`
  /* background-color: ${(props) =>
    props.bg === "transparent" ? "transparent" : "#fff"};
  border-radius: 10px; */
`
const ContentWrapper = styled.div`
  /* padding: 32px 24px 24px;
  padding: ${(props) => (props.bg === "transparent" ? "0" : "")} !important;

  theme.above.tablet} {
    padding: 32px 0px;
  }
  theme.above.laptop} {
    padding: 48px 0px;
  }
  theme.above.desktop} {
    padding: 64px 0px;
  }
  theme.above.largeDesktop} {
    padding: 80px 0px;
  } */
`
const TextWrapper = styled.div`
  /* margin-top: 24px;

  theme.above.tablet} {
    margin-top: 32px;
  }
  theme.above.laptop} {
    margin-top: 48px;
  } */
`

// const Grid = styled.ul`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   column-gap: 24px;
//   row-gap: 24px;
//   margin-bottom: 40px;

//   /* theme.above.tablet} {
//     grid-template-columns: repeat(2, 1fr);
//     column-gap: 32px;
//   }
//   theme.above.laptop} {
//     grid-template-columns: repeat(3, 1fr);
//     column-gap: 48px;
//   } */
// `
// const Block = styled.li``
// const BlockTitle = styled(T.H6)`
//   /* text-align: center;
//   margin-bottom: 8px; */
// `

// const IconWrapper = styled.div`
//   /* margin-bottom: 16px;
//   text-align: center; */
//   /* theme.above.tablet} {
//   } */
//   svg {
//     width: 48px;
//     height: 48px;
//   }
// `
// const BlockDescription = styled(T.Body)`
//   /* text-align: center; */
// `

const StatementWrapper = styled.div`
  padding: 12px 24px;
  background-color: ${theme.color.background.emphesized};
  border-radius: 4px;
  max-width: 1170px;
  margin: 0 auto;
  margin-top: 64px;
`
const Statement = styled(T.Body)``
