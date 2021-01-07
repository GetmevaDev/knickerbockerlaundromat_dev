import React, { useEffect } from "react"
import {graphql, useStaticQuery} from "gatsby"
import Title from "../../title"
import Img from "gatsby-image"

import classes from "./equipmentSection.module.scss"

import Aos from "aos"
import "aos/dist/aos.css"



const EquipmentSection = () =>{

    useEffect(() => {
        Aos.init({duration: 900})
    },[])

  const data = useStaticQuery(graphql`
      {
          allStrapiEquipments {
              edges {
                  node {
                      Title
                      Text
                      Color_block
                      Image {
                          childImageSharp {
                              fixed(width: 175){
                                  ...GatsbyImageSharpFixed
                              }
                          }
                      }
                  }
              }
          }
      }
  `)

  return(
    <section  className={classes.sectionEquipments}>
      <Title
        title={`All equipment is Dexter`}
      />
      <div className={`container ${classes.row}`}>
        {
          data.allStrapiEquipments.edges.map(card => {

            return(
              <div data-aos="fade-up" className={classes.cardEquipment} style={{
                background: card.node.Color_block
              }}>
                <div className={classes.imageEquipment}>
                    <img src={card.node.Image && card.node.Image !== null ?
                      card.node.Image.childImageSharp.fixed.src : null} alt="" />



                </div>
                <div>
                  <h3>{card.node.Title}</h3>
                  <p>{card.node.Text}</p>
                </div>

              </div>
            )
          })
        }

      </div>
    </section>
  )
}

export default EquipmentSection