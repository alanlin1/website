import React from "react"
import { graphql } from "gatsby"

import LangLayout from "./../../layouts/en"

import {
  HeroSimple,
  Main,
  SectionPartners,
  SectionWhy,
  SeoComponent,
} from "./../../components"

const Partners = (props) => {
  return (
    <LangLayout>
      <SeoComponent
        title="Partners"
        description="We're the UK's Largest eCommerce Investor"
      />
      <HeroSimple data={props.data.partnersJson.hero} />
      <Main>
        <SectionPartners
          data={props.data.partnersJson.ourPartners}
          form={props.data.partnersJson.form}
          language=""
        />
        <SectionWhy data={props.data.partnersJson.why} />
      </Main>
    </LangLayout>
  )
}

export default Partners

export const query = graphql`
  query PartnerQuerry {
    partnersJson(language: { regex: "/en-GB/" }) {
      hero {
        description
        title
      }
      form {
        company
        email
        name
        title
        btn {
          text
        }
      }
      ourPartners {
        description
        title
        image {
          src {
            childImageSharp {
              gatsbyImageData
            }
          }
          alt
        }
      }
      why {
        title
        blocks {
          text
          icon
          title
        }
      }
    }
  }
`
