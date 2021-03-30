import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Title from "../../title"
import classes from "./posters.module.scss"

import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"


const Posters = () => {
  useEffect(() => {
    Aos.init({duration: 900})
  },[])

  const data = useStaticQuery(graphql`
      {
          strapiDropOffService {
              Posters_with_offers {
                  Title
                  Title_inside_poster
                  Text
                  Font_size_text
                  Color_title_inside_poster
                  id
                  Image {
                      alternativeText
                      url
                  }
              }
          }
      }
  `)

  return(
    <section style={{

      paddingBottom: 71,
      background: `#F2F2F2`
    }}>
      <div className="container">
        {
          data.strapiDropOffService.Posters_with_offers.map(item => (
            <div data-aos="fade-up" className={classes.posters}>
              <Title
              title={item.Title}
              />
              <div className={classes.blockPoster} style={{
                background: `url("${item.Image && item.Image !== null ?
                  item.Image[0].url : null
                }")`
              }}>
                {item.Title_inside_poster && item.Title_inside_poster !== null ?
                  (<h3 style={{color: `#${item.Color_title_inside_poster}`}}>{item.Title_inside_poster}</h3>) :
                  null}
                {item.Text && item.Text !== null ?
                  (<p style={{fontSize: `${item.Font_size_text}px`}}>{item.Text}</p>) :
                  null}
              </div>

            </div>
          ))
        }

      </div>
    </section>
  )
}

export default Posters