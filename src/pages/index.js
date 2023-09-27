import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SectionHeader from "../components/homePageComponents/sectionHeader/SectionHeader"
import SectionContacts from "../components/homePageComponents/sectionContacts/SectionContacts"
import SectionOffer from "../components/homePageComponents/sectionOffers/SectionOffers"

import "../scss/main.scss"
import EquipmentSection from "../components/homePageComponents/equipmentSection/EquipmentSection"

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <SectionHeader />
      <SectionContacts />
      <SectionOffer />
      {/* <EquipmentSection /> */}
    </Layout>
  )
}

export default IndexPage
