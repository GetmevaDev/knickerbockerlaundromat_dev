import React from "react"

import styles from "./Banner.module.scss"

const Banner = ({ title, subtitle, imgUrl }) => {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <h3>{subtitle}</h3>
      <h1>{title}</h1>
    </div>
  )
}

export default Banner
