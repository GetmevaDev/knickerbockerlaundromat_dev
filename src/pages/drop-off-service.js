import React from "react"
import { Discount } from "../components/Discount/Discount"
import DropOffServiceSectionHeader from "../components/DropOffServiceComponents/DropOffServiceSectionHeader/DropOffServiceSectionHeader"
import Posters from "../components/DropOffServiceComponents/Posters/Posters"
import Table from "../components/DropOffServiceComponents/Table/Table"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

const DropOffService = () => {
  const data = useStaticQuery(
    graphql`
      query SeoDropOffService {
        strapiDropOffService {
          seo {
            metaDescription
            metaTitle
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO
        title={data?.strapiDropOffService?.seo?.metaTitle}
        description={data?.strapiDropOffService?.seo?.metaDescription}
      />

      <DropOffServiceSectionHeader />
      <Discount />

      <Posters />
      <Table />
      {/* <EquipmentSection /> */}
    </Layout>
  )
}

export default DropOffService
