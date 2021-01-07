import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./Logo/Logo"
import NavMenu from "./NavMenu/NavMenu"



const Header = ({ siteTitle }) => (
  <header className={`site-header`}>
    <div className={`container row`}>
      <Logo />
      <NavMenu />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
