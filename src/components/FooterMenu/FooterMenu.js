import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"

import classes from "./footerMenu.module.scss"


const FooterMenu = () => {

  const data = useStaticQuery(graphql`
    {
    strapiNavigationMenu {
        Menu {
            Name_Page
            Link
            id
        }
      }
    }
  `)
  return(
    <ul className={classes.footerMenu}>
      {
        data.strapiNavigationMenu.Menu.map(item => {

          return(
            <li>
              <Link
                activeStyle={{
                  color: `#43C0E4`,
                }}
                to={item.Link}>{item.Name_Page}</Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default FooterMenu