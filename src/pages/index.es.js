import React from "react"
import { graphql } from "gatsby"

import LangLayout from "./../layouts/es"

import {
  Main,
  SectionWeFunded,
  // SectionWeAreInvesting,
  SectionSupercharging,
  SectionFindOut,
  SectionFaq,
  SectionAboutUs,
  SectionRegulated,
  HeroHomepage,
  SeoComponent,
  SectionInfoStrip,
  SectionLoanDescriptions,
  SectionComparisonES,
  SectionBenefits,
  SectionRepay,
  SectionWhoCanApply,
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
        <SectionInfoStrip
          data={[
            { up: "Aplica en solo", down: "5 minutos" },
            { up: "Tickets desde", down: "15k€ a 10M€" },
            { up: "Ofertas en tan solo", down: "24h" },
            { up: "Top-ups y acompañamiento", down: "de capital contínuo" },
          ]}
        />
        <SectionLoanDescriptions
          data={{
            title: "Financiación rápida y flexible",
            rbs: {
              title: "Financiación Revenue Based",
              description:
                "Analizamos tus ingresos mensuales y proporcionamos capital en un plazo de 24 horas a cambio de un porcentaje pre-acordado de tus ventas futuras.  <br/><br/> La devolución depende de tus ventas futuras, lo que significa que la amortización irá de la mano de la performance de tu compañía. Si los ingresos disminuyen, también lo hacen los reembolsos. Desde un principio sabrás cuánto repaga tu empresa.",
            },
            fixed: {
              title: "Créditos de amortización fija",
              description:
                "Analizamos tus ingresos mensuales y proporcionamos capital en un plazo de 24 horas, con un plan de amortización fijo. <br/><br/> A través de un plan de amortización fijo controlas mejor tu cash flow. Sabrás desde el principio el total a pagar, y el plazo asociado.",
            },
            howToUse: {
              title: "Cómo usar tus fondos",
              description:
                "El capital se acredita en tu cuenta de Outfund, y tú decides cómo gastarlo.",
              first: {
                title: "Tarjeta virtual",
                description:
                  "Configura tu tarjeta de marketing digital e invierte en marketing digital.",
              },
              second: {
                title: "Facturas",
                description:
                  "Carga tus facturas en nuestra plataforma y financiaremos los gastos de tu negocio, como inventario, logística y fees de agencias.",
              },
              third: {
                title: "Efectivo",
                description:
                  "Recibe fondos en tu cuenta bancaria y ten la flexibilidad de gastar en lo que necesites *",
                note: "*La disponibilidad se basa en tus circunstancias y está sujeta a revisión.",
              },
            },
          }}
        />

        <SectionComparisonES
          data={{
            title: "Encuentra la mejor solución para tu negocio.",
            description:
              "Somos complementarios a todas las alternativas de financiación tradicionales. Queremos democratizar el acceso a la financiación flexible, con el fin de mitigar el riesgo financiero para los emprendedores.",
          }}
        />

        <SectionWhoCanApply
          data={{
            title: "¿Quién puede aplicar?",
            list: [
              "Negocios digitales tipo SaaS, Ecommerce, Suscripciones, App Móvil, B2B",
              "12+ meses operando bajo una sociedad",
              "+30k€ en ingresos mensuales",
            ],
            btn: "Aplica ya",
          }}
        />

        <SectionBenefits
          data={{
            title: "Beneficios para tu negocio",
            list: [
              {
                title: "Obtiene financiación rápida",
                description:
                  "Accede a financiación para el circulante con el fin de evitar tensiones de tesorería y potenciar el crecimiento de tu negocio.",
              },
              {
                title: "Soporte personalizado",
                description:
                  "Accede a nuestra red de partnerships con expertos en márketing incluyendo Google, Amazon y Facebook.",
              },
              {
                title: "Capital no dilutivo y sin garantías personales",
                description:
                  "¿Por qué ceder parte de la compañía para financiar aspectos medibles y repetibles en el tiempo? Mantén el control de tu negocio",
              },
            ],
          }}
        />
        <SectionRepay
          data={{
            title: "Repagos flexibles",
            description:
              "Repaga según tus ventas futuras. ¿Se han visto reducidos los ingresos de tu negocio? Nuestros repagos también.",
            btn: {
              text: "Apply now",
              url: "https://client.out.fund/signup",
            },
          }}
        />

        {/* <SectionFindOut data={props.data.homepageJson.findOut} /> */}
        <SectionFindOut
          data={{
            title: "Averigüe cuánto se puede conseguir",
            description:
              "Las ofertas de financiación se basan en sus ingresos mensuales promedio. Obtenga una indicación rápida de su elegibilidad con nuestra calculadora fácil de usar. Recibe financiación en 24 horas con 3 sencillos pasos: <br/><br/> <ul><li>Crea una cuenta y conecta tus cuentas</li><li>Selecciona tus ofertas</li><li>Obtener financiación</li></ul>",
            calculator: {
              title: "¿Cuánto necesitas?",
              termTitle: "Término",
              months: "meses",
              fee: "Tarifa fija a pagar *",
              repayable: "Total reembolsable",
              rateNote:
                "* Esta calculadora es solo un ejemplo, la tarifa para su negocio variará según sus circunstancias y está sujeta a cambios.",
              buttonText: "Solicitar",
              buttonNote: "La solicitud no afectará su puntaje crediticio.",
              range: [
                "10 000€",
                "20 000€",
                "50 000€",
                "70 000€",
                "100 000€",
                "200 000€",
                "500 000€",
                "700 000€",
                "1 000 000€",
              ],
            },
          }}
        />
        <SectionWeFunded data={data.weFunded} />
        {/* <SectionWeAreInvesting data={data.weInvesting} /> */}
        <SectionSupercharging data={data.startSupercharging} />
        {/* <SectionFaq data={props.data.homepageJson.faq} /> */}
        <SectionAboutUs data={props.data.homepageJson.aboutUs} />
        <SectionRegulated data={props.data.trustJson} />
      </Main>
    </LangLayout>
  )
}
export default HomePage

export const query = graphql`
  query esHomePage {
    homepageJson(language: { regex: "/es-ES/" }) {
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
    trustJson(language: { regex: "/es-ES/" }) {
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
