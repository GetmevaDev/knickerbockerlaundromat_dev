import React, { useEffect } from "react"
import {graphql, useStaticQuery} from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Title from "../../title"
import classes from "./reason.module.scss"

import Aos from "aos"
import "aos/dist/aos.css"

const Reason = () => {
  useEffect(() => {
    Aos.init({duration: 900})
  },[])

  const data = useStaticQuery(graphql`
      {
          strapiSelfServicePage {
              Reason {
                  Title
                  Subtitle
                  Image {
                      alternativeText
                      url
                  }
              }
          }
      }
  `)

  return(
    <section style={{
      paddingBottom: 44
    }}>
      <Title
      title={`Why You Should Wash With Us`}
      />
      <div className="container" data-aos="fade-up">
        {/*<BackgroundImage*/}
        {/*  Tag="div"*/}
        {/*  className={classes.blockReason}*/}
        {/*  fluid={data.strapiSelfServicePage.Reason.Image && data.strapiSelfServicePage.Reason.Image ?*/}
        {/*    data.strapiSelfServicePage.Reason.Image.childImageSharp.fluid : null}*/}
        {/*  backgroundColor={`#465656`}*/}
        {/*>*/}
        <div className={classes.blockReason} style={{
          background: `url("${data.strapiSelfServicePage.Reason.Image && data.strapiSelfServicePage.Reason.Image ?
            data.strapiSelfServicePage.Reason.Image[0].url : null
          }")`
        }}>
            <h2>{
              data.strapiSelfServicePage.Reason.Title && data.strapiSelfServicePage.Reason.Title !== null ?
              data.strapiSelfServicePage.Reason.Title : null
            }</h2>
            <h3>{data.strapiSelfServicePage.Reason.Subtitle && data.strapiSelfServicePage.Reason.Subtitle !== null ?
              data.strapiSelfServicePage.Reason.Subtitle : null
            }</h3>
        {/*</BackgroundImage>*/}
        </div>
      </div>
    </section>
  )
}

export default Reason