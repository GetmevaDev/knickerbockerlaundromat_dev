import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Contacts = ({ icon, titleCard, phone, email, className, classNameImgContainer }) =>{

  return(
    <div className={className}>
      <div className={classNameImgContainer}>
        <Img
          fluid={icon}
        />

      </div>
      <h3>{titleCard}</h3>
      <a
        className="text_card-contact"
        href={`tel:${phone}`}>
        {phone}
      </a>

      <a
        className="text_card-contact"
        href={`mailto:${email}`}>
        {email}
      </a>
    </div>
  )
}

export default Contacts