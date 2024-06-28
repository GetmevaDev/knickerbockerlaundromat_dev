import React from "react"

import SectionHeader from "../components/LaundryPickUp/sectionHeader/SectionHeader"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Discount } from "../components/Discount/Discount"
import "../scss/main.scss"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query SeoPickUp {
        strapiPickUp {
          seo {
            metaTitle
            metaDescription
          }
        }
      }
    `
  )

  console.log(data, "data")

  return (
    <Layout>
      <SEO
        title={data?.strapiPickUp?.seo?.metaTitle}
        description={data?.strapiPickUp?.seo?.metaDescription}
      />
      <SectionHeader />
      <Discount />

      {/* <EquipmentSection /> */}
    </Layout>
  )
}

export default IndexPage
