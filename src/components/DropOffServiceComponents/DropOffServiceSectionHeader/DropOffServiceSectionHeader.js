import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import BackgroundImage from "gatsby-background-image"

import classes from "./dropOffServiceSectionHeader.module.scss"


const DropOffServiceSectionHeader = () =>{

  const data = useStaticQuery(graphql`
      {
          strapiDropOffService {
              Title
              Subtitle
              Background_Section_Header {
                  childImageSharp {
                      fluid(maxWidth: 3000){
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
          }
      }
  `)

  return(
    <BackgroundImage
      Tag="section"
      className={classes.sectionHeader_DropOffService}
      fluid={data.strapiDropOffService.Background_Section_Header &&
      data.strapiDropOffService.Background_Section_Header !== null ?
        data.strapiDropOffService.Background_Section_Header.childImageSharp.fluid :
        null}
      backgroundColor={`#3b4854`}
    >

      <div className={`container ${classes.w900}`}>
        <h2>{data.strapiDropOffService.Title && data.strapiDropOffService.Title !== null ?
          data.strapiDropOffService.Title : null
        }</h2>
        <h4>{data.strapiDropOffService.Subtitle && data.strapiDropOffService.Subtitle !== null ?
          data.strapiDropOffService.Subtitle : null
        }</h4>
      </div>




      </BackgroundImage>
  )
}

export default DropOffServiceSectionHeader