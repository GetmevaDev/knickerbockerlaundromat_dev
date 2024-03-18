import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import classes from "../../DropOffServiceComponents/DropOffServiceSectionHeader/dropOffServiceSectionHeader.module.scss"

const DropOffServiceSectionHeader = () => {
  const data = useStaticQuery(graphql`
    {
      strapiDropOffService {
        Title
        Subtitle
        Background_Section_Header {
          alternativeText
          url
        }
      }
    }
  `)

  return (
    <section
      className={classes.sectionHeader_DropOffService}
      style={{
        background: `#3b4854 url("${data.strapiDropOffService.Background_Section_Header[0].url}")`,
      }}
    >
      <div className={`container ${classes.w900}`}>
        <h2>
          {data.strapiDropOffService.Title &&
          data.strapiDropOffService.Title !== null
            ? data.strapiDropOffService.Title
            : null}
        </h2>
        <h4>
          {data.strapiDropOffService.Subtitle &&
          data.strapiDropOffService.Subtitle !== null
            ? data.strapiDropOffService.Subtitle
            : null}
        </h4>
      </div>
    </section>
  )
}

export default DropOffServiceSectionHeader
