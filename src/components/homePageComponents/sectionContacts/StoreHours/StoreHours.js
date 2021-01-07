import React from "react"
import Img from "gatsby-image"


const StoreHours = ({ icon, titleCard, day, time, className, classNameImgContainer }) => {

  return(
    <div className={className}>
      <div className={classNameImgContainer}>
        <Img
          fluid={icon}
        />
      </div>
      <h3>{titleCard}</h3>
      <span className="text_card-contact">{day}</span>
      <span className="text_card-contact">{time}</span>
    </div>
  )
}

export default StoreHours