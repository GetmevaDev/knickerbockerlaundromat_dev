import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import classes from "./socialMedia.module.scss"



const SocialMedia = () => {

  const data = useStaticQuery(graphql`
      {
          strapiSocialMedia {
              Social {
                  id
                  Name
                  Link
              }
          }
      }
  `)

  return(
    <ul className={classes.SocialMedia}>
      {
        data.strapiSocialMedia.Social.map(social => {
          return(
            <li key={social.id}>
              <Link to={social.Link}>
                <span className={`fa fa-${social.Name}`}></span>
              </Link>
            </li>
          )
        })
      }

    </ul>
  )
}

export default SocialMedia