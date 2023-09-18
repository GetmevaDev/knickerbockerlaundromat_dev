import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./Areas.module.scss"
import Aos from "aos"
import { Area } from "./Area/Area"

export const Areas = () => {
  const data = useStaticQuery(graphql`
    {
      strapiPickUp {
        Areas {
          title
        }
        Area {
          AreaPlace {
            number
            place
            id
          }
          id
          title
        }
      }
    }
  `)

  useEffect(() => {
    Aos.init({ duration: 900 })
  }, [])

  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.areas}>
        <h2 className={styles.title}>{data?.strapiPickUp?.Areas?.title}</h2>

        <div className={styles.areas_inner}>
          {data?.strapiPickUp?.Area?.map(area => (
            <div className={styles.area_brooklyn} key={area.id}>
              <div className={styles.top}>
                <div className={styles.place}>{area?.title}</div>
                <div className={styles.border} />
              </div>
              <div className={styles.areas_block}>
                {area?.AreaPlace?.map(item => (
                  <Area number={item.number} text={item.place} key={item.id} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
