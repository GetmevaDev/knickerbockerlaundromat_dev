import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Title from "../../title"
import Img from "gatsby-image"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

import classes from "./advantages.module.scss"

const Advantages = () =>{
    useEffect(() => {
        Aos.init({duration: 900})
    },[])
  const data = useStaticQuery(graphql`
      {
          allStrapiAdvantages {
              edges {
                  node {
                      Title
                      Text
                      id
                      Image {
                          alternativeText
                          url
                      }
                  }
              }
          }
      }
  `)

  return(
    <section>
      <Title
      title={`Benefits of Our Dryers`}
      />
      <div className="container">

        {
          data.allStrapiAdvantages.edges.map((block, i) =>{
            return(
              <div data-aos="fade-up" className={`${i % 2 === 1 ? "row-reverse" : " "} ${classes.blockAdvantage}`}>
                  <div className={classes.img}>
                      {/*<Img*/}
                      {/*  fixed={block.node.Image && block.node.Image !== null ?*/}
                      {/*    block.node.Image.childImageSharp.fixed : null}*/}
                      {/*/>*/}
                    <img src={
                      block.node.Image && block.node.Image !== null ?
                      block.node.Image[0].url : null
                    } alt={block.node.Image[0].alternativeText} />
                  </div>
                <div className={classes.blockText}>
                  <h3>{block.node.Title && block.node.Title !== null ?
                    block.node.Title : null
                  }</h3>
                  <p>{block.node.Text && block.node.Text !== null ?
                    block.node.Text : null
                  }</p>
                </div>
              </div>
            )
          })
        }

      </div>
    </section>
  )
}

export default Advantages