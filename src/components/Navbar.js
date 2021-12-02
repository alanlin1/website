import * as React from "react"
import Logo from "../images/svg/OutfundLogo.svg"
import MenueIcon from "../images/svg/MenueIcon.svg"
import styled from "styled-components"
import { SecondaryButton } from "./shared/Button"

const StyledNavbar = styled.nav`
  background-color: #f2f6fa;
  height: 72px;
  display: flex;
  align-items: center;
  padding: 0 16px 0 32px;
  .logo {
    background-color: #fff;
    margin-right: auto;
  }
  .menueIcon {
    margin-left: 1rem;
  }
`

const Navbar = (props) => {
  return (
    <StyledNavbar>
      <Logo className="logo" />
      <SecondaryButton>Start live chat</SecondaryButton>
      <MenueIcon className="menueIcon" />
    </StyledNavbar>
  )
}

export default Navbar