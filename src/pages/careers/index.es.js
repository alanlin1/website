import React from "react"
import { graphql } from "gatsby"

import LangLayout from "./../../layouts/es"

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
  // SectionOpenings,
  SeoComponent,
} from "./../../components"

const Careers = (props) => {
  return (
    <LangLayout>
      <SeoComponent
        title="Carreras"
        description="Únete al inversor de comercio electrónico de más rápido crecimiento en España"
      />
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
        {/* <SectionOpenings data={props.data.careersJson.currentOpenings} /> */}
        <SectionRegulated data={props.data.trustJson} bg={"transparent"} />
      </Main>
    </LangLayout>
  )
}

export default Careers

export const query = graphql`
  query esCareersPage {
    careersJson(language: { regex: "/es-ES/" }) {
      hero {
        # btn {
        #   text
        #   url
        # }
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
    trustJson(language: { regex: "/es-ES/" }) {
      title
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
