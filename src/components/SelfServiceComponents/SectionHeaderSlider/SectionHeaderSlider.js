import React, { Component } from "react";
import Slider from "react-slick";
import {StaticQuery, graphql} from "gatsby"
import classes from "./slider.module.scss"




export default class SimpleSlider extends Component {
  render() {

    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: {
      //   delay: 5000,
      // },
    };
    return (

      <StaticQuery
      query={graphql`
        {
            strapiSelfServicePage {
                HeaderSlider {
                    Text
                    id
                    Image {
                        childImageSharp {
                            fixed(width: 1000){
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
        }
    `}
      render={data => (
        <section className={classes.sectionSlider} >
          <div className={classes.blockSlider}>
            <Slider {...settings}>

              {
                data.strapiSelfServicePage.HeaderSlider.map(item => {

                  return(
                    <div className={classes.blockSlide} >
                      <img src={item.Image && item.Image !== null ?
                        item.Image.childImageSharp.fixed.src : null} alt="" />
                        <h2 className={classes.titleSlider}>{item.Text && item.Text !== null ?
                          item.Text : null
                        }</h2>
                    </div>
                  )
                })
              }


            </Slider>
          </div>

        </section>
      )}
      />

    );
  }
}
