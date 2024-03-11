import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import homePageVideo from "../../../images/home-page-video.mp4"

import classes from "./sectionHeader.module.scss"

const SectionHeader = () => {
  const data = useStaticQuery(graphql`
    {
      strapiHomePage {
        Pretitle
        Title
        Subtitle
        Background_SectionHeader {
          alternativeText
          url
        }
      }
    }
  `)

  return (
    <section
      className={classes.sectionHeader}
      style={{
        background: `#1a7ce2 url("${data.strapiHomePage.Background_SectionHeader[0].url}")`,
      }}
    >
      {/*<BackgroundImage*/}
      {/*  Tag="section"*/}
      {/*  className={classes.sectionHeader}*/}
      {/*  fluid={data.strapiHomePage.Background_SectionHeader && data.strapiHomePage.Background_SectionHeader !== null ?*/}
      {/*    data.strapiHomePage.Background_SectionHeader.childImageSharp.fluid :*/}
      {/*    null}*/}
      {/*  backgroundColor={`#2f89f3`}*/}
      {/*>*/}
      <div className={`container ${classes.row}`}>
        <div className={classes.left}>
          <video className={classes.video} controls>
            <source src={homePageVideo} type="video/mp4" />
          </video>
        </div>
        <div className={classes.right}>
          {data.strapiHomePage.Pretitle &&
          data.strapiHomePage.Pretitle !== null ? (
            <h3>{data.strapiHomePage.Pretitle}</h3>
          ) : null}
          {data.strapiHomePage.Title && data.strapiHomePage.Title !== null ? (
            <h2>{data.strapiHomePage.Title}</h2>
          ) : null}
          {data.strapiHomePage.Subtitle &&
          data.strapiHomePage.Subtitle !== null ? (
            <h4>{data.strapiHomePage.Subtitle}</h4>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default SectionHeader