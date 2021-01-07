import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Title from "../../title"
import { useEffect } from "react"
import classes from "./cycle.module.scss"

import Arrow from "../../../images/Group.png"
import Aos from "aos"
import "aos/dist/aos.css"



const Cycle = () =>{
  useEffect(() => {
    Aos.init({duration: 900})
  },[])
  const data = useStaticQuery(graphql`
      {
          strapiSelfServicePage {
              Description {
                  Images {
                      Name_Cycle
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
    <section className={classes.sectionCycle} style={{
      paddingTop: 0,
      paddingBottom: 0
    }}>
      <Title
      title={`Efficient`}
      />
      <p className={classes.afterTitle}>Every Cycle includes a Wash, Rinse, Final Rinse, and Extract</p>
      <div data-aos="fade-up" className={`container row ${classes.adaptiveBlock}`} style={{
        alignItems: `center`
      }}>
        {
          data.strapiSelfServicePage.Description.Images.map((elem, i) => {

            return(
              <>
                <div>
                  <div className={classes.cardCycle}>
                    <img className={classes.iconCycle} src={elem.img && elem.img !== null ?
                      elem.img.childImageSharp.fixed.src : null
                    } alt="" />
                  </div>
                  <span>{elem.Name_Cycle}</span>
                </div>

                {(data.strapiSelfServicePage.Description.Images.length - 1) === i   ? null : (<img className={classes.imgArrow} src={Arrow} alt="" />)}
              </>
            )
          })
        }
      </div>
    </section>
  )
}

export default Cycle