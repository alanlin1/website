import React from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, FooterSimple, NewsBar } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"

import "./../styles/new/typography/font.css"

import { LangProvider } from "./../utils/LangProvider"

const DK = ({ children, simpleNavbar, pt, noNavbar, noFooter }) => {
  return (
    <GlobalLayout pt={pt}>
      {!noNavbar && (
        <NewsBar
          text="🎉 Outfund rejser 115 millioner britiske pund i ny serie A-investering, og forpligter sig til lån på yderligere 500 millioner til e-commerce virksomheder i år."
          url="https://tech.eu/2022/04/27/going-all-out-to-change-the-way-online-businesses-raise-funds-lands-ps115-million-in-outfunds-kitty/"
          urlText="Læs mere"
        />
      )}

      <LangProvider langKey="dk">
        {!simpleNavbar && !noNavbar && <Navbar lang="dk" />}
        {simpleNavbar && !noNavbar && <SimpleNavbar lang="dk" />}
        {children}
        {!noFooter && <FooterSimple lang="dk" />}
      </LangProvider>
    </GlobalLayout>
  )
}

export default DK
