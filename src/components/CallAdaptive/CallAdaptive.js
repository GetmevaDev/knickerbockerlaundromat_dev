import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import classes from "./callAdaptive.module.scss"
import CallImage from "../../images/mobile-phones-telephone-call-computer-icons-voip-phone-jpg-plumbing-gasfitting-6fe89ae07ce0fd9e9fb6e437e9299ab2.png"

const CallAdaptive = () => {
  const data = useStaticQuery(graphql`
    {
      strapiContactsAndLocation {
        Phone
        makeAppointment
      }
    }
  `)

  return (
    <div className={classes.adaptiveCall}>
      <a href={`tel:${data.strapiContactsAndLocation.Phone}`}>
        <img src={CallImage} alt="" /> Call us
      </a>
      <a href={data.strapiContactsAndLocation.makeAppointment}>
        Make appointment
      </a>
    </div>
  )
}

export default CallAdaptive
