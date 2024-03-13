import React from "react"

import styles from "./TextBlock.module.scss"
import ReactMarkdown from "react-markdown"

const TextBlock = ({
  mainTitle,
  mainText,
  ourServicesTitle,
  ourServicesContent,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainBlock}>
        <h2>{mainTitle}</h2>
        <p>{mainText}</p>
      </div>
      <div className={styles.ourServices}>
        <h3>{ourServicesTitle}</h3>
        <p>
          <ReactMarkdown source={ourServicesContent} />
        </p>
      </div>
    </div>
  )
}

export default TextBlock
