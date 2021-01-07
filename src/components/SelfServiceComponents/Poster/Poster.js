import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import classes from "./poster.module.scss"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

const Poster = () =>{
  useEffect(() => {
    Aos.init({duration: 900})
  },[])
  const data = useStaticQuery(graphql`
      {
          strapiSelfServicePage {
              Title_poster
              Answer
              Question
              Poster_img {
                  childImageSharp {
                      fixed(width: 1000){
                          ...GatsbyImageSharpFixed
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
      <div data-aos="fade-up" className={`container row ${classes.posterBlock}`}  style={{
        background: `url("${data.strapiSelfServicePage.Poster_img && data.strapiSelfServicePage.Poster_img ?
          data.strapiSelfServicePage.Poster_img.childImageSharp.fixed.src : null
        }")`
      }}>
        <h2>{data.strapiSelfServicePage.Title_poster && data.strapiSelfServicePage.Title_poster ?
          data.strapiSelfServicePage.Title_poster : null
        }</h2>
        <h3>{data.strapiSelfServicePage.Question && data.strapiSelfServicePage.Question ?
          data.strapiSelfServicePage.Question : null
        }</h3>
        <h3>{data.strapiSelfServicePage.Answer && data.strapiSelfServicePage.Answer ?
          data.strapiSelfServicePage.Answer : null
        }</h3>
      </div>
    </section>
  )
}

export default Poster