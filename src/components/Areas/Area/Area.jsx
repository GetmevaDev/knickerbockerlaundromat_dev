import React from "react"

import styles from "./Area.module.scss"

export const Area = ({ number, text }) => {
  return (
    <div className={styles.area}>
      <div className={styles.number}>{number}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="4"
        height="5"
        className={styles.svg}
        viewBox="0 0 4 5"
        fill="none"
      >
        <circle cx="2" cy="2.5" r="2" fill="#2676BC" />
      </svg>
      <div className={styles.text}>{text}</div>
    </div>
  )
}
