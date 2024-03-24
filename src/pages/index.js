import React from "react"

import SectionContacts from "../components/homePageComponents/sectionContacts/SectionContacts"
import SectionHeader from "../components/homePageComponents/sectionHeader/SectionHeader"
import SectionOffer from "../components/homePageComponents/sectionOffers/SectionOffers"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Discount } from "../components/Discount/Discount"
import "../scss/main.scss"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query Seo {
        strapiHomePage {
          seo {
            metaTitle
            metaDescription
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO
        title={data?.strapiHomePage?.seo?.metaTitle}
        description={data?.strapiHomePage?.seo?.metaDescription}
      />
      <SectionHeader />
      <SectionContacts />
      <Discount />

      <SectionOffer />
      {/* <EquipmentSection /> */}
    </Layout>
  )
}

export default IndexPage
