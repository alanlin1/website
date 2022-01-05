import React from "react"
import { graphql } from "gatsby"

import EnLayout from "layouts/en"

import {
  Main,
  HeroSimple,
  SectionRegulated,
  HeroImage,
  Stats,
  SectionWeGrow,
  SectionCoolPeople,
  SectionInOfficeRemote,
  SectionWeValue,
  SectionOpenings,
} from "./../../components"

const Careers = (props) => {
  return (
    <EnLayout>
      <HeroSimple data={props.data.careersJson.hero} />
      <Main>
        <HeroImage data={props.data.careersJson.hero.image} />
        <Stats data={props.data.careersJson.stats} />
        <SectionWeGrow data={props.data.careersJson.weGrow} />
        <SectionCoolPeople data={props.data.careersJson.coolPeople} />
        <SectionInOfficeRemote
          data={props.data.careersJson.inOffice}
          officeData={props.data.officesJson}
        />
        <SectionWeValue data={props.data.careersJson.weValue} />
        <SectionOpenings data={props.data.careersJson.currentOpenings} />
        <SectionRegulated data={props.data.trustJson} bg={"transparent"} />
      </Main>
    </EnLayout>
  )
}

export default Careers

export const query = graphql`
  query {
    careersJson(language: { regex: "/en-GB/" }) {
      hero {
        btn {
          text
          url
        }
        description
        title
        image {
          alt
          src {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      stats {
        text
        stat
      }
      coolPeople {
        btn {
          text
          url
        }
        title
        people {
          description
          name
          role
          image {
            alt
            src {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      currentOpenings {
        btn {
          text
          url
        }
        description
        title
        openings {
          location
          time
          title
          link
        }
        openApplication {
          description
          email
          title
        }
      }
      inOffice {
        btn {
          text
          url
        }
        description
        title
        blocks {
          icon
          text
          title
        }
      }
      language
      seoKeywords
      seoTitle
      weGrow {
        description
        title
        teamWorked {
          logos
          title
        }
        image {
          alt
          src {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      weValue {
        title
        blocks {
          text
          title
        }
      }
    }
    trustJson(language: { regex: "/en-GB/" }) {
      title
      statement
      description
      blocks {
        title
        icon
        text
      }
    }
    officesJson(language: { regex: "/en-GB/" }) {
      offices {
        main {
          country
          firstLine
          secondLine
          title
        }
        world {
          list {
            country
            firstLine
            secondLine
          }
          title
        }
      }
      image {
        alt
        src {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
