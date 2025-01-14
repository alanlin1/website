import React from "react"
import { graphql } from "gatsby"

import LangLayout from "./../layouts/us"

import {
  Main,
  SectionWeFunded,
  SectionWeAreInvesting,
  SectionSupercharging,
  SectionFindOut,
  SectionFaq,
  SectionAboutUs,
  SectionRegulated,
  HeroHomepage,
  SeoComponent,
  TrustpilotSwiper,
} from "./../components"

const HomePage = (props) => {
  const {
    data: { homepageJson: data },
  } = props

  return (
    <LangLayout>
      <SeoComponent title={data.seo.title} description={data.seo.description} />
      <HeroHomepage data={data.hero} />
      <Main>
        <TrustpilotSwiper />
        <SectionWeFunded data={data.weFunded} />
        <SectionWeAreInvesting data={data.weInvesting} />
        <SectionSupercharging data={data.startSupercharging} />
        <SectionFindOut
          data={{
            title: "Find out how much you can get",
            description:
              "Funding offers are based on your average monthly revenue. Get a quick indication of your eligibility with our easy-to-use calculator. Get funded in 24 hours with 3 simple steps: <br/><br/> <ul><li>Create account and connect your accounts</li><li>Select your offers</li><li>Get funded</li></ul>",
            calculator: {
              title: "How much do you need?",
              termTitle: "Term",
              months: "months",
              fee: "Flat fee to pay *",
              repayable: "Total repayable",
              rateNote:
                "* This calculator is only an example, rate for your business will vary based on your circumstances and is subject to change.",
              buttonText: "Apply for",
              buttonNote: "Applying will not affect your credit score.",
              range: [
                "$10 000",
                "$20 000",
                "$50 000",
                "$70 000",
                "$100 000",
                "$200 000",
                "$500 000",
                "$700 000",
                "$1 000 000",
              ],
            },
          }}
        />
        {/* <SectionFaq data={props.data.homepageJson.faq} /> */}
        <SectionAboutUs data={props.data.homepageJson.aboutUs} />
        <SectionRegulated data={props.data.trustJson} />
      </Main>
    </LangLayout>
  )
}
export default HomePage

export const query = graphql`
  query usHomePage {
    homepageJson(language: { regex: "/en-US/" }) {
      seo {
        title
        description
      }
      aboutUs {
        buttons {
          primary {
            text
            url
          }
          secondary {
            text
            url
          }
        }
        stats {
          stat
          text
        }
        description
        title
        teamImages {
          src {
            childImageSharp {
              gatsbyImageData
            }
          }
          name
        }
      }
      blog {
        btn
        btnUrl
        title
      }
      findOut {
        calculator {
          btn {
            text
            url
          }
          range
          select {
            default
            dropdown
            title
          }
          title
        }

        description
        title
      }
      faq {
        btn {
          text
          url
        }
        questions {
          answer
          question
        }
        title
      }
      hero {
        primaryBtn {
          text
          url
        }
        secondaryBtn {
          text
          url
        }
        description
        title
      }
      language
      startSupercharging {
        card {
          logo
          quote {
            by
            title
          }
          company
          tag {
            text
            color
          }
          image {
            src {
              childImageSharp {
                gatsbyImageData
              }
            }
            alt
          }
        }
        btn {
          text
          url
        }
        title
      }
      weFunded {
        description
        title
        cards {
          feel {
            company
            btn {
              text
              url
            }
            logo
            tag {
              text
              color
            }
            quote {
              by
              title
            }
            image {
              src {
                childImageSharp {
                  gatsbyImageData
                }
              }
              alt
            }
          }
          lemonadeDolls {
            company
            btn {
              text
              url
            }
            logo
            tag {
              text
              color
            }
            image {
              src {
                childImageSharp {
                  gatsbyImageData
                }
              }
              alt
            }
          }
        }
      }
      weInvesting {
        btn {
          text
          url
        }
        image {
          src {
            childImageSharp {
              gatsbyImageData
            }
          }
          alt
        }
        description
        title
      }
    }
    trustJson(language: { regex: "/en-US/" }) {
      title
      description
      blocks {
        icon
        title
        text
      }
    }
  }
`
