import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import classes from "./sectionHeaderLaundry.module.scss"
import video from "../../../images/video.mp4"
import poster from "../../../images/poster.png"

const SectionHeader = () => {
  const data = useStaticQuery(graphql`
    {
      strapiPickUp {
        topbar {
          subtitle
          title
          link
          textLink
          img {
            url
          }
        }
      }
    }
  `)

  console.log("data", data.strapiPickUp.topbar.link)

  return (
    <section
      className={classes.sectionHeader}
      style={{
        background: `#1a7ce2 url("${data.strapiPickUp.topbar.img[0].url}")`,
      }}
    >
      <div className={`container ${classes.row}`}>
        <div className={classes.main}>
          <div className={classes.left}>
            <h3 className={classes.title}>{data.strapiPickUp.topbar.title}</h3>
            <h4 className={classes.subtitle}>
              {data.strapiPickUp.topbar.subtitle}
            </h4>
            <span className={classes.link}>
              <a href={data.strapiPickUp.topbar.link}>
                {data.strapiPickUp.topbar.textLink}
              </a>
            </span>
          </div>

          <div className={classes.right}>
            <video className={classes.video} poster={poster} controls>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionHeader
