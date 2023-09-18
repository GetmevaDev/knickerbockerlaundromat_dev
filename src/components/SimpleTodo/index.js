import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../title"
import { useEffect } from "react"
import classes from "./SimpleTodo.module.scss"

import Arrow from "../../images/Group.png"
import Aos from "aos"
import "aos/dist/aos.css"

const SimpleTodo = () => {
  useEffect(() => {
    Aos.init({ duration: 900 })
  }, [])
  const data = useStaticQuery(graphql`
    {
      strapiPickUp {
        simple {
          img {
            url
          }
          title
        }
      }
    }
  `)

  console.log("data", data)

  return (
    <section
      className={classes.sectionCycle}
      style={{
        paddingTop: 100,
        paddingBottom: 20,
      }}
    >
      <Title title={`Scheduling is simple to do`} />

      <div
        data-aos="fade-up"
        className={`container row ${classes.adaptiveBlock}`}
        style={{
          alignItems: `baseline`,
          marginTop: 50,
        }}
      >
        {data.strapiPickUp.simple.map((elem, i) => {
          return (
            <>
              <div>
                <div className={classes.cardCycle}>
                  <img
                    className={classes.iconCycle}
                    src={elem.img && elem.img !== null ? elem.img[0].url : null}
                    alt=""
                  />
                </div>
                <span className={classes.title}>{elem.title}</span>
              </div>

              {data.strapiPickUp.simple.length - 1 === i ? null : (
                <img className={classes.imgArrow} src={Arrow} alt="" />
              )}
            </>
          )
        })}
      </div>
    </section>
  )
}

export default SimpleTodo
