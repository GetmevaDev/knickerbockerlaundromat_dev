import React from "react"

import styles from "./VisitUs.module.scss"
import ReactMarkdown from "react-markdown"

const VisitUs = ({ title, content }) => {
  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <p>
        <ReactMarkdown source={content} />
      </p>
    </div>
  )
}

export default VisitUs
