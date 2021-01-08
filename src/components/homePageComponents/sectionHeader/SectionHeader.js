import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import BackgroundImage from "gatsby-background-image"

import classes from "./sectionHeader.module.scss"

const SectionHeader = () => {

  const data = useStaticQuery(graphql`
      {
          strapiHomePage {
              
                  Pretitle
                  Title
                  Subtitle
                  Background_SectionHeader {
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
    <>


      <BackgroundImage
        Tag="section"
        className={classes.sectionHeader}
        fluid={data.strapiHomePage.Background_SectionHeader && data.strapiHomePage.Background_SectionHeader !== null ?
          data.strapiHomePage.Background_SectionHeader.childImageSharp.fluid :
          null}
        backgroundColor={`#2f89f3`}
      >

          <div className={`container ${classes.row}`}>

              {data.strapiHomePage.Pretitle && data.strapiHomePage.Pretitle !== null ? (<h3>{data.strapiHomePage.Pretitle}</h3>) : null}
              {data.strapiHomePage.Title && data.strapiHomePage.Title !== null ? (<h2>{data.strapiHomePage.Title}</h2>) : null}
              {data.strapiHomePage.Subtitle && data.strapiHomePage.Subtitle !== null ? (<h4>{data.strapiHomePage.Subtitle}</h4>) : null}


          </div>

      </BackgroundImage>



</>
  )
}

export default SectionHeader