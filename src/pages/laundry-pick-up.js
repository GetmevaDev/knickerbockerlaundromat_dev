import React from "react"

import SectionHeader from "../components/LaundryPickUp/sectionHeader/SectionHeader"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Discount } from "../components/Discount/Discount"
import "../scss/main.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <SectionHeader />
      <Discount />

      {/* <EquipmentSection /> */}
    </Layout>
  )
}

export default IndexPage
