import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import Img from "gatsby-image"
import classes from "./logo.module.scss"


const Logo = () => {

  const logo = useStaticQuery(graphql`
      {
          strapiHomePage {
                  Logo {
                      childImageSharp {
                          fixed(width: 231){
                              ...GatsbyImageSharpFixed
                          }
                      }
                  }
              }
          }
  `);


  return(
    <Link
    to={`/`}
    className={classes.logoLink}
    >
      <Img fixed={ logo.strapiHomePage.Logo && logo.strapiHomePage.Logo !== null ?
        logo.strapiHomePage.Logo.childImageSharp.fixed : null} />
    </Link>
  )
}

export default Logo