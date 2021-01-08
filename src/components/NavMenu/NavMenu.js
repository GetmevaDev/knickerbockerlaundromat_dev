import React, { useState } from "react"
import {graphql, StaticQuery, Link} from "gatsby"
import Burger from "../../images/burger.svg"
import Close from "../../images/close.svg"

import classes from "./navMenu.module.scss"


class NavMenu extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      activeButton: false
    }
  }

  toggleButton(){
    this.setState({
      activeButton: !this.state.activeButton,
    })
  }


  render() {
    const activeMenuStyle = {
      transform: 'translateX(0)',
      opacity: '1',
    }
    return (
        <StaticQuery
        query={graphql`
        {
            strapiNavigationMenu {
                Menu {
                    Name_Page
                    Link
                    id
                }
            }
        }
    `}
        render={data => (
          <>
          <ul className={classes.menuItems}  style={this.state.activeButton ? activeMenuStyle : null}>
            {
              data.strapiNavigationMenu.Menu.map(itemPage => (
                <li className={classes.linkItem}>
                  <Link activeStyle={{
                    color: `#43C0E4`,
                    fontWeight: 700,
                  }} to={itemPage.Link}>{itemPage.Name_Page}</Link>
                </li>
              ))
            }

          </ul>

          <button
            onClick={this.toggleButton.bind(this)}
            className={classes.buttonMenu}>
          <img src={Burger} alt="" style={{
            display: `${this.state.activeButton ? "none" : "inline-block"}`
          }} />
          <img src={Close} alt="" style={{
            display: `${this.state.activeButton ? "inline-block" : "none"}`
          }}/>
          </button>
          </>
        )}
        />

    )
  }


}

export default NavMenu