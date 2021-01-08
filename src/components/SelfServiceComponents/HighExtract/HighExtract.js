import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import ReactMarkdown from "react-markdown"
import BackgroundImage from "gatsby-background-image"
import classes from "./highExtract.module.scss"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

const HeightExtract = () => {
  useEffect(() => {
    Aos.init({duration: 900})
  },[])
  const data = useStaticQuery(graphql`
      {
          strapiSelfServicePage {
              DescriptionTwo {
                  Title
                  Description
                  Img {
                      childImageSharp {
                          fluid(maxWidth: 3000){
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
              }
          }
      }
  `)

  return(
    <section style={{
      paddingTop: 44,
      paddingBottom: 0
    }}>
      <div className="container" data-aos="fade-up">
        <BackgroundImage
          Tag="div"
          className={classes.blockDescription}
          fluid={data.strapiSelfServicePage.DescriptionTwo.Img && data.strapiSelfServicePage.DescriptionTwo.Img ?
            data.strapiSelfServicePage.DescriptionTwo.Img.childImageSharp.fluid : null}
          backgroundColor={`#465656`}
        >

          <h2>{data.strapiSelfServicePage.DescriptionTwo.Title && data.strapiSelfServicePage.DescriptionTwo.Title !== null ?
            data.strapiSelfServicePage.DescriptionTwo.Title : null
          }</h2>
          <ReactMarkdown
          source={data.strapiSelfServicePage.DescriptionTwo.Description && data.strapiSelfServicePage.DescriptionTwo.Description !== null ?
            data.strapiSelfServicePage.DescriptionTwo.Description : null}
          />

        </BackgroundImage>
      </div>
    </section>
  )
}


export default HeightExtract