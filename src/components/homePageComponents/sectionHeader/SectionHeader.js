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
                          fixed(width: 3000){
                              ...GatsbyImageSharpFixed
                          }
                      }
                  }
              
          }
      }
  `)

  return(
    <>



        <section className={classes.sectionHeader} style={{
        padding: 0,
          background: `url("${data.strapiHomePage.Background_SectionHeader && data.strapiHomePage.Background_SectionHeader !== null ?
            data.strapiHomePage.Background_SectionHeader.childImageSharp.fixed.src :
                 null}")`
        }}>
          <div className={`container ${classes.row}`}>

              {data.strapiHomePage.Pretitle && data.strapiHomePage.Pretitle !== null ? (<h3>{data.strapiHomePage.Pretitle}</h3>) : null}
              {data.strapiHomePage.Title && data.strapiHomePage.Title !== null ? (<h2>{data.strapiHomePage.Title}</h2>) : null}
              {data.strapiHomePage.Subtitle && data.strapiHomePage.Subtitle !== null ? (<h4>{data.strapiHomePage.Subtitle}</h4>) : null}


          </div>

        </section>



</>
  )
}

export default SectionHeader