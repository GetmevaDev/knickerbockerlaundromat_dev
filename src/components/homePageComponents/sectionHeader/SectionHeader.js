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
      <div className={`container ${classes.row}`}>
        <div className={classes.left}>
          <video className={classes.video} controls>
            <source src={homePageVideo} type="video/mp4" />
          </video>
        </div>
        <h1 className={classes.right}>
          {data?.strapiHomePage && (
            <>
              <div className={classes.pre}>
                {data?.strapiHomePage?.Pretitle}
              </div>
              <div className={classes.title}>{data?.strapiHomePage?.Title}</div>
              <div className={classes.sub}>
                {data?.strapiHomePage?.Subtitle}
              </div>
            </>
          )}
        </h1>
      </div>
    </section>
  )
}

export default SectionHeader
