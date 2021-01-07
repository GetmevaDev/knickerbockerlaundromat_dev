import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import ReactMarkdown from "react-markdown"
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
                          fixed(width: 1000){
                              ...GatsbyImageSharpFixed
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
      <div className="container">
        <div data-aos="fade-up" className={classes.blockDescription}  style={{
          background: `url("${data.strapiSelfServicePage.DescriptionTwo.Img && data.strapiSelfServicePage.DescriptionTwo.Img ?
            data.strapiSelfServicePage.DescriptionTwo.Img.childImageSharp.fixed.src : null
          }")`
        }}>
          <h2>{data.strapiSelfServicePage.DescriptionTwo.Title && data.strapiSelfServicePage.DescriptionTwo.Title !== null ?
            data.strapiSelfServicePage.DescriptionTwo.Title : null
          }</h2>
          <ReactMarkdown
          source={data.strapiSelfServicePage.DescriptionTwo.Description && data.strapiSelfServicePage.DescriptionTwo.Description !== null ?
            data.strapiSelfServicePage.DescriptionTwo.Description : null}
          />
        </div>
      </div>
    </section>
  )
}


export default HeightExtract