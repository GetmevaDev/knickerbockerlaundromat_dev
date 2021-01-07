import React, { useEffect } from "react"
import {graphql, useStaticQuery} from "gatsby"
import Title from "../../title"
import Img from "gatsby-image"
import classes from "./sectionOffers.module.scss"

import Aos from "aos"
import "aos/dist/aos.css"

const SectionOffer = () => {
  useEffect(() => {
    Aos.init({duration: 900})
  },[])

  const data = useStaticQuery(graphql`
      {
          allStrapiOffers {
              edges {
                  node {
                      Text
                      Title
                      Color_Background_Icon
                      Icon {
                          childImageSharp{
                              fluid(maxWidth: 200) {
                                  ...GatsbyImageSharpFluid
                              }
                          }
                      }
                  }
              }
          }
      }
  `)

  return(
    <section >

        <Title
        title={`We Are A Five-Star Facility`}
        />
      <div className="container row" style={{
        flexWrap: `wrap`,
        justifyContent: `center`
      }}>
        {
          data.allStrapiOffers.edges.map((card, i) => {

          return(
            <div data-aos="fade-up"  className={classes.cardOffer}>
              <div className={classes.cardOffer_image} style={{
                background: card.node.Color_Background_Icon,
              }}>
                <Img
                  fluid={card.node.Icon && card.node.Icon !== null ?
                    card.node.Icon.childImageSharp.fluid : null
                  }
                />
              </div>
                <h3>{card.node.Title && card.node.Title !== null ?
                  card.node.Title : null
                }</h3>
                <p>{card.node.Text && card.node.Text !== null ?
                  card.node.Text : null
                }</p>

            </div>
          )
        })
        }

      </div>
    </section>
  )
}

export default SectionOffer