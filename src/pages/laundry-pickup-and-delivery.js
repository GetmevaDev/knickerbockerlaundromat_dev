import React from "react"
import { Areas } from "../components/Areas/Areas"
import { Discount } from "../components/Discount/Discount"
import SimpleTodo from "../components/SimpleTodo"
import { TablePricing } from "../components/TablePricing/TablePricing"
import { ThingsToKnow } from "../components/ThingsToKnow/ThingsToKnow"
import SectionHeaderLaundry from "../components/homePageComponents/sectionHeaderLaundry"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
export default function PickUp() {
  const data = useStaticQuery(
    graphql`
      query SeoPickUpAndDelivery {
        strapiPickUp {
          seo {
            metaTitle
            metaImage {
              nlink
            }
            metaDescription
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO
        title={data?.strapiPickUp?.seo?.metaTitle}
        description={data?.strapiPickUp?.seo?.metaDescription}
      />
      <SectionHeaderLaundry />
      <Discount />
      <Areas />
      <TablePricing />
      <ThingsToKnow />
      <SimpleTodo />
      {/* <Offer  */}
      {/* <EquipmentSection /> */}
    </Layout>
  )
}
