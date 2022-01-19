import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import classes from "./OfferLaundry.module.scss"
import Aos from "aos"

const Offer = () => {
  React.useEffect(() => {
    Aos.init({ duration: 900 })
  }, [])

  const data = useStaticQuery(graphql`
    {
      strapiPickUp {
        card {
          Title
          cardSubTitle
          cardTitle
          pricePer
          price
          span
        }
        textundercard
      }
    }
  `)

  console.log("datacard", data)

  return (
    <div className={classes.container}>
      <div data-aos="fade-up" className={classes.offer}>
        <h3 className={classes.title}>{data.strapiPickUp.card[0].Title}</h3>

        <div className={classes.offerMain}>
          <div className={classes.offerLeft}>
            <div className={classes.premium}>
              <p className={classes.premiumTitle}>
                {data.strapiPickUp.card[0].cardTitle}
              </p>
              <p className={classes.color}>
                {data.strapiPickUp.card[0].cardSubTitle}
              </p>
            </div>
            <div className={classes.price}>
              <p>
                {data.strapiPickUp.card[0].price} <br />
                <p className={classes.priceBottom}>
                  {data.strapiPickUp.card[0].pricePer}
                </p>
              </p>
            </div>
          </div>
          <div className={classes.offerRight}>
            <div className={classes.premium}>
              <p className={classes.premiumTitle}>
                {data.strapiPickUp.card[1].cardTitle}
              </p>

              <p className={classes.color}>
                {data.strapiPickUp.card[1].cardSubTitle}
              </p>
            </div>
            <div className={classes.price}>
              <p>
                {data.strapiPickUp.card[1].price} <br />
                <p className={classes.priceBottom}>
                  {data.strapiPickUp.card[1].pricePer}
                </p>
              </p>
            </div>
          </div>
        </div>
        <span className={classes.offerText}>
          {data.strapiPickUp.card[1].span}
        </span>
      </div>
      <span className={classes.text} data-aos="fade-up">
        {data.strapiPickUp.textundercard}
      </span>
    </div>
  )
}

export default Offer
