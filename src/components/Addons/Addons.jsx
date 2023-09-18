import React from "react"

import styles from "./Addons.module.scss"
import { graphql, useStaticQuery } from "gatsby"

export const Addons = () => {
  const data = useStaticQuery(graphql`
    {
      strapiPickUp {
        Addons {
          title
          Addon {
            name
            price
            id
          }
        }
      }
    }
  `)

  console.log(data, "data")

  return (
    <div className={styles.addons}>
      <div className={styles.addons_inner}>
        <div className={styles.addon_header}>
          {data?.strapiPickUp?.Addons?.title}
        </div>

        <div className={styles.addons_block}>
          {data?.strapiPickUp?.Addons?.Addon?.map(addon => (
            <div className={styles.addon} key={addon.id}>
              <div className={styles.text}>{addon.name}</div>
              <div className={styles.price}>{addon.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
