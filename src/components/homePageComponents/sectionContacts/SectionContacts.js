import React, { useEffect } from "react"
import {graphql, useStaticQuery} from "gatsby"
import Aos from "aos"
import "aos/dist/aos.css"

import StoreHours from "./StoreHours/StoreHours"
import Address from "./Adderss/Address"
import Contacts from "./Contacts/Contacts"

import classes from "./sectionContacts.module.scss"


const SectionContacts = () => {
  useEffect(() => {
    Aos.init({duration: 700})
  },[])

  const data = useStaticQuery(graphql`
      {
          strapiContactsAndLocation {
              TitleOneBlock
              TitleThreeBlock
              TitleTwoBlock
              WorkDays
              Phone
              Location
              LinkLocation
              Hours
              Email
              IconAddress {
                  childImageSharp {
                      fluid(maxWidth: 200) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
              IconContacts {
                  childImageSharp {
                      fluid(maxWidth: 200) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
              IconStoreHours {
                  childImageSharp {
                      fluid(maxWidth: 200) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
          }
      }
  `)

const {
  TitleOneBlock,
  TitleThreeBlock,
  TitleTwoBlock,
  WorkDays,
  Phone,
  Location,
  LinkLocation,
  Hours,
  Email,
  IconAddress,
  IconContacts,
  IconStoreHours
      } = data.strapiContactsAndLocation;


  return(
    <section data-aos="fade-up" style={{
      padding: 0,
    }}>
      <div className={`container ${classes.SectionContacts}`}>

              <StoreHours
                className={classes.contactCard}
                classNameImgContainer={classes.contactCard_icon}
                icon={IconStoreHours && IconStoreHours !== null ?
                  IconStoreHours.childImageSharp.fluid : null
                }
                titleCard={TitleOneBlock}
                day={WorkDays}
                time={Hours}
              />


            <Address
              className={classes.contactCard}
              classNameImgContainer={classes.contactCard_icon}
                titleCard={TitleTwoBlock}
                icon={IconAddress && IconAddress !== null ?
                  IconAddress.childImageSharp.fluid : null}
                textLink={Location}
                link={LinkLocation}
            />


            <Contacts
              className={classes.contactCard}
              classNameImgContainer={classes.contactCard_icon}
                titleCard={TitleThreeBlock}
                icon={IconContacts && IconContacts !== null ?
                  IconContacts.childImageSharp.fluid : null}
                phone={Phone}
                email={Email}
            />
      </div>
    </section>
  )
}


export default SectionContacts