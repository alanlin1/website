import React from "react"
import styled from "styled-components"
// import { graphql } from "gatsby"

import T from "../../styles/new/typography"
import { theme } from "./../../styles/new/theme"

import LangLayout from "./../../layouts/es"

import {
  HeroSimple,
  Main,
  SeoComponent,
  ReferralForm,
  Section,
  SectionHeader,
  SectionRegulated,
} from "./../../components"

const ReferralProgram = (props) => {
  return (
    <LangLayout>
      <SeoComponent
        title="Programa de referencia"
        description="Programa de referencia"
      />
      <HeroSimple data={{ title: "Programa de referencia" }} />
      <Main>
        <Section>
          <Wrapper>
            <ContentWrapper>
              <TextWrapper>
                <SectionHeader
                  title={
                    "Te hemos ayudado, ahora ayudemos también a tus amigos fundadores."
                  }
                  description={
                    "Por cada fundador que financiemos, <b>recibirás 500€</b> en crédito para tu próxima “Outfund Facility”"
                  }
                />
              </TextWrapper>

              <FormWrapper>
                <T.H4>¿Tienes a alguien en mente?</T.H4>
                <ReferralForm
                  form={{
                    workEmail: "Tu correo electrónico",
                    friendEmail: "Correo electrónico de amigos",
                    btn: { text: "Enviar" },
                  }}
                  language={"es"}
                />
              </FormWrapper>
            </ContentWrapper>
          </Wrapper>
        </Section>
        <SectionRegulated
          data={{
            title: "Ofrecemos servicios únicos",
            blocks: [
              {
                title: "Regulado por la FCA",
                icon: "<svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><path opacity='.3' d='m12.579 12 10.42-5.48L33.419 12h-20.84Z' fill='#2D65BF'/><path d='M13 20H9v14h4V20Zm12 0h-4v14h4V20Zm17 18H4v4h38v-4Zm-5-18h-4v14h4V20ZM23 2 4 12v4h38v-4L23 2ZM12.58 12 23 6.52 33.42 12H12.58Z' fill='#2D65BF'/></svg>",
                text: "Estamos regulados por la FCA en el Reino Unido y cumplimos con los requisitos más estrictos.",
              },
              {
                title: "Protección de datos",
                icon: "<svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><path opacity='.3' d='M12 12.62v9.56c0 8 5.1 15.4 12 17.66 6.9-2.26 12-9.64 12-17.66v-9.56L24 8.38l-12 4.24Zm21.2 7.14L21.88 31.08 14.8 24l2.82-2.82 4.24 4.24 8.48-8.48 2.86 2.82Z' fill='#2D65BF'/><path d='M24 4 8 10v12.18C8 32.28 14.82 41.7 24 44c9.18-2.3 16-11.72 16-21.82V10L24 4Zm12 18.18c0 8-5.1 15.4-12 17.66-6.9-2.26-12-9.64-12-17.66v-9.56l12-4.24 12 4.24v9.56Zm-18.36-1L14.8 24l7.08 7.08L33.2 19.76l-2.82-2.82-8.48 8.48-4.26-4.24Z' fill='#2D65BF'/></svg>",
                text: "Tu seguridad es nuestra prioridad. Nos comprometemos a mantener la seguridad de los datos de tu empresa y somos transparentes en la forma en que los recopilamos, procesamos y almacenamos.",
              },
              {
                title: "Soporte 24/7",
                icon: "<svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><path d='M28 27h8v-3h-8v3Zm0 6h8v-3h-8v3Zm12-19H30V8c0-2.2-1.8-4-4-4h-4c-2.2 0-4 1.8-4 4v6H8c-2.2 0-4 1.8-4 4v22c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V18c0-2.2-1.8-4-4-4ZM22 8h4v10h-4V8Zm18 32H8V18h10c0 2.2 1.8 4 4 4h4c2.2 0 4-1.8 4-4h10v22ZM18 30c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3Zm4.16 2.36c-1.28-.56-2.68-.86-4.16-.86s-2.88.3-4.16.86A3.011 3.011 0 0 0 12 35.14V36h12v-.86c0-1.22-.72-2.3-1.84-2.78Z' fill='#2D65BF'/><path opacity='.3' d='M26 22h-4c-2.2 0-4-1.8-4-4H8v22h32V18H30c0 2.2-1.8 4-4 4Zm-8 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3Zm6 12H12v-.86c0-1.2.72-2.3 1.84-2.78 1.28-.56 2.68-.86 4.16-.86s2.88.3 4.16.86c1.1.48 1.84 1.56 1.84 2.78V36Zm12-3h-8v-3h8v3Zm0-6h-8v-3h8v3Z' fill='#2D65BF'/></svg>",
                text: "Nuestro equipo de atención al cliente está disponible 24/7. Su objetivo es ponerte las cosas lo más fácil posible.",
              },
            ],
          }}
        />
      </Main>
    </LangLayout>
  )
}

export default ReferralProgram

const FormWrapper = styled.div`
  background-color: ${theme.color.background.emphesized};
  padding: 32px 40px;
  border-radius: 10px;
  h4 {
    margin-bottom: 24px;
  }
`
const Wrapper = styled.div`
  margin-top: 120px;
`
const TextWrapper = styled.div`
  h2 {
    margin-bottom: 16px;
  }
`
const ContentWrapper = styled.div`
  /* background-color: #afa; */
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1170px;
  margin: 0 auto;
  gap: 64px;
  ${theme.above.t.m} {
    grid-template-columns: 570fr 520fr;
  }
`

// export const query = graphql`
//   query PartnerQuerry {
//     partnersJson(language: { regex: "/en-GB/" }) {
//       hero {
//         description
//         title
//       }
//       form {
//         company
//         email
//         name
//         title
//         btn {
//           text
//         }
//       }
//       ourPartners {
//         description
//         title
//         image {
//           src {
//             childImageSharp {
//               gatsbyImageData
//             }
//           }
//           alt
//         }
//       }
//       why {
//         title
//         blocks {
//           text
//           icon
//           title
//         }
//       }
//     }
//   }
// `
