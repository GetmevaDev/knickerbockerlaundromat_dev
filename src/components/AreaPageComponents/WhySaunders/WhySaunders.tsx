import React from "react"

import bgImage from "../../../images/washing-dirty-clothes.png"

import styles from "./WhySaunders.module.scss"
import ReactMarkdown from "react-markdown"

const WhySaunders = ({ title, reasons }) => {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2>{title}</h2>
      <p>
        <ReactMarkdown source={reasons} />
      </p>
    </div>
  )
}

export default WhySaunders
