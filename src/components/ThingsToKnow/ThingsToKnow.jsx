import React, { useEffect } from "react"

import styles from "./ThingsToKnow.module.scss"
import { Thing } from "./Thing/Thing"
import Aos from "aos"
import { graphql, useStaticQuery } from "gatsby"

export const ThingsToKnow = () => {
  const data = useStaticQuery(graphql`
    {
      strapiPickUp {
        Things {
          title
          description

          Thing {
            number
            description
            id
            color
          }
        }
      }
    }
  `)

  useEffect(() => {
    Aos.init({ duration: 900 })
  }, [])

  console.log(data, "strapiPickUp color")

  return (
    <div className={styles.container} data-aos="fade-up">
      <h3 className={styles.title}>{data?.strapiPickUp?.Things?.title}</h3>
      <div className={styles.description}>
        {data?.strapiPickUp?.Things?.description}
      </div>

      <div className={styles.things}>
        {data?.strapiPickUp?.Things?.Thing?.map(item => (
          <Thing
            key={item.id}
            number={item.number}
            description={item.description}
            color={item.color}
          />
        ))}
      </div>
    </div>
  )
}
