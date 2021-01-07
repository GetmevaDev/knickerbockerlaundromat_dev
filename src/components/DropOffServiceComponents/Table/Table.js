import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Title from "../../title"
import classes from "./table.module.scss"

import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

const Table = () =>{
  useEffect(() => {
    Aos.init({duration: 900})
  },[])
  const data = useStaticQuery(graphql`
      {
          strapiDropOffService {
              Available_Upgrades {
                  Table {
                      Text
                      id
                      LB
                  }
              }
          }
      }
  `)

  return(
    <section className={classes.sectionTable}>
      <Title
      title={`Available Upgrades`}
      />
      <div data-aos="fade-up" className="container">
        <div className={classes.containerTable}>
          {
            data.strapiDropOffService.Available_Upgrades.Table.map(item => (
              <div className={classes.tr}>
                <div className={classes.td}>{item.Text}</div>
                <div className={classes.td}>{item.LB}</div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Table