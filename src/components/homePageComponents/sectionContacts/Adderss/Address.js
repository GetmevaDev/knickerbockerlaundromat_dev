import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Address = ({ icon, titleCard, textLink, link, className, classNameImgContainer }) => {
  return(
    <div className={className}>
      <div className={classNameImgContainer}>
        <Img
          fluid={icon}
        />
      </div>
      <h3>{titleCard}</h3>
      <Link
        className="text_card-contact"
        to={link}>
        {textLink}
      </Link>
    </div>
  )
}


export default Address