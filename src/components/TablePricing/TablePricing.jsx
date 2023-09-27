import React, { useEffect } from "react"

import styles from "./TablePricing.module.scss"
import Aos from "aos"
import { Addons } from "../Addons/Addons"
import { graphql, useStaticQuery } from "gatsby"

const Check = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="cross">
      <path
        id="Vector"
        d="M22 6.99997L10 19L3 12L5.5 9.5L10 14L19.5 4.5L22 6.99997Z"
        fill="#26BC6C"
      />
    </g>
  </svg>
)

const Cross = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="cross">
      <g id="Union">
        <path d="M9 11H3V14H9V11Z" fill="#D6D6D6" />
        <path d="M17 11H11V14H17V11Z" fill="#D6D6D6" />
      </g>
    </g>
  </svg>
)

const services = [
  {
    name: "Service 1",
    plan1: true,
    plan2: false,
    plan3: true,
  },
  {
    name: "Service 2",
    plan1: false,
    plan2: true,
    plan3: true,
  },
  {
    name: "Service 3",
    plan1: true,
    plan2: true,
    plan3: false,
  },
]

export const TablePricing = () => {
  const data = useStaticQuery(graphql`
    {
      strapiPickUp {
        id
        Service {
          id
          name
          plan1
          plan2
          plan3
        }
        Services {
          SubTItle
          title
          NameOfServices {
            name
            id
          }
        }
      }
    }
  `)

  useEffect(() => {
    Aos.init({ duration: 900 })
  }, [])

  return (
    <div className={styles.container} data-aos="fade-up">
      <div className={styles.table}>
        <h2 className={styles.title}>
          {data?.strapiPickUp?.Services?.title}
          <span> {data?.strapiPickUp?.Services?.SubTItle}</span>
        </h2>

        <div className={styles.tables}>
          <div className={styles.service_table_container}>
            <div className={styles.service_table}>
              <div className={styles.table_header}>
                <div className={styles.services_name}>Name of the service</div>
                {data?.strapiPickUp?.Services?.NameOfServices?.map(item => (
                  <div className={styles.name_plan} key={item.id}>
                    {item.name}
                  </div>
                ))}
              </div>
              <div className={styles.table_body}>
                {data?.strapiPickUp?.Service?.map((service, index) => (
                  <div className={styles.table_row} key={index}>
                    <div className={styles.service_name}>
                      <div className={styles.service_name_inner}>
                        {service.name}
                      </div>
                    </div>
                    <div className={styles.plan_option}>
                      <div className={styles.plan_option_inner}>
                        {service.plan1 ? <Check /> : <Cross />}
                      </div>
                    </div>
                    <div className={styles.plan_option}>
                      <div className={styles.plan_option_inner}>
                        {service.plan2 ? <Check /> : <Cross />}
                      </div>
                    </div>
                    <div className={styles.plan_option}>
                      <div className={styles.plan_option_inner}>
                        {service.plan3 ? <Check /> : <Cross />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.table_addons}>
            <Addons />
          </div>
        </div>
      </div>
    </div>
  )
}
