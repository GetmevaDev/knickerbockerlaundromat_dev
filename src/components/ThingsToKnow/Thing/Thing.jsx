import React, { useState } from "react"
import styles from "./Thing.module.scss"

export const Thing = ({ number, description, color }) => {
  const [isShowDescription, setIsShowDescription] = useState(false)

  const toggleDescription = () => {
    setIsShowDescription(!isShowDescription)
  }

  const truncatedDescription = isShowDescription
    ? description
    : description.slice(0, 80) + "..."

  return (
    <div className={styles.thing}>
      <div className={styles.number} style={{ color: color }}>
        {number}
      </div>

      <div className={styles.description}>
        {truncatedDescription}
        <div className={styles.content}>
          {!isShowDescription && (
            <div className={styles.read} onClick={toggleDescription}>
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M4.3225 5.005L7 7.6825L9.6775 5.005L10.5 5.83334L7 9.33334L3.5 5.83334L4.3225 5.005Z"
                  fill="#2676BC"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
