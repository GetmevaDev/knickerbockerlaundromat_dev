import React from "react"
import {graphql, useStaticQuery} from "gatsby"

import classes from "./dropOffServiceSectionHeader.module.scss"


const DropOffServiceSectionHeader = () =>{

  const data = useStaticQuery(graphql`
      {
          strapiDropOffService {
              Title
              Subtitle
              Background_Section_Header {
                  childImageSharp {
                      fixed(width: 3000){
                          ...GatsbyImageSharpFixed
                      }
                  }
              }
          }
      }
  `)

  return(
    <section className={classes.sectionHeader_DropOffService}  style={{
      background: `url("${data.strapiDropOffService.Background_Section_Header &&
      data.strapiDropOffService.Background_Section_Header !== null ?
        data.strapiDropOffService.Background_Section_Header.childImageSharp.fixed.src :
        null
      }")`
    }}>
      <div className={`container ${classes.w900}`}>
        <h2>{data.strapiDropOffService.Title && data.strapiDropOffService.Title !== null ?
          data.strapiDropOffService.Title : null
        }</h2>
        <h4>{data.strapiDropOffService.Subtitle && data.strapiDropOffService.Subtitle !== null ?
          data.strapiDropOffService.Subtitle : null
        }</h4>
      </div>



    </section>
  )
}

export default DropOffServiceSectionHeader