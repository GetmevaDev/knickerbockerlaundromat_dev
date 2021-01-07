import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import classes from "./extendedCycle.module.scss"
import Arrow from "../../../images/Group.png"

import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

const ExtendedCycle = () =>{
  useEffect(() => {
    Aos.init({duration: 900})
  },[])
  const data = useStaticQuery(graphql`
      {
          strapiSelfServicePage {
              ExtendedCycle {
                  ExtendCycle {
                      Name_Cycle
                      id
                      img {
                          childImageSharp {
                              fixed(width: 300) {
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
    <section style={{
      paddingTop: 42,
      paddingBottom: 0
    }}>
      <div data-aos="fade-up" className={`container row ${classes.adaptiveBlocks}`} style={{
        alignItems: `center`
      }}>
        {
          data.strapiSelfServicePage.ExtendedCycle.ExtendCycle.map((elem, i) => {

            return(
              <>
                <div>
                  <div className={classes.circle}>
                    <img  src={elem.img && elem.img !== null ?
                      elem.img.childImageSharp.fixed.src : null
                    } alt="" />
                  </div>
                  <span>{elem.Name_Cycle}</span>
                </div>

                {(data.strapiSelfServicePage.ExtendedCycle.ExtendCycle.length - 1) === i   ?
                  null : (<img className={classes.imgArrow} src={Arrow} alt="" />)}
              </>
            )
          })
        }
      </div>
    </section>
  )
}

export default ExtendedCycle