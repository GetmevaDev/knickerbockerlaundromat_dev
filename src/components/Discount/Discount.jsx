import React, { useEffect } from "react"

import Aos from "aos"
import styles from "./Discount.module.scss"

export const Discount = () => {
  useEffect(() => {
    Aos.init({ duration: 900 })
  }, [])
  return (
    <div className={styles.discount} data-aos="fade-up">
      <p>
        20% off your next pick up and delivery order! Just use Promo Code: 20OFF
      </p>
    </div>
  )
}
