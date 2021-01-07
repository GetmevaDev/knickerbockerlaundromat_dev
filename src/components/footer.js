import React from "react"
import FooterMenu from "./FooterMenu/FooterMenu"
import Logo from "./Logo/Logo"
import SocialMedia from "./SocialMedia/SocialMedia"
import MoveUp from "../images/24px-move-up.png"
import {animateScroll as scroll} from "react-scroll"


const Footer = () => {

  return(
    <footer className={`site-footer`}>

      <div className="container">
      <FooterMenu />
        <Logo />
        <SocialMedia />
      </div>
      <section style={{
        marginTop: `37.68px`,
        background: `#2676BC`,
      }}>
        <div className="container row" >
          <p className={`text`}>©Copyright 2020. All rights reserved</p>
          <a className={`scrollToTop`} href="#" onClick={() => scroll.scrollToTop()}>
            <img src={MoveUp} alt="" />
          </a>
        </div>
      </section>

    </footer>
  )
}

export default Footer