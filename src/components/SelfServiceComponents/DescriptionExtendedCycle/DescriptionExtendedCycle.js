import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import ReactMarkdown from "react-markdown"
import classes from "./descriptionExtendedCycle.module.scss"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

const DescriptionExtendedCycle = () => {
  useEffect(() => {
    Aos.init({duration: 900})
  },[])
  const data = useStaticQuery(graphql`
      {
          strapiSelfServicePage {
              Text
          }
      }
  `)

  return(
    <section data-aos="fade-up" style={{
      paddingTop: 42,
      paddingBottom:0
    }} className={classes.text}>
      <div className="container">
        <ReactMarkdown
        source={data.strapiSelfServicePage.Text}
        />
      </div>
    </section>
  )
}

export default DescriptionExtendedCycle