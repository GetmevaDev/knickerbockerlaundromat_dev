import React from "react"
import Advantages from "../components/SelfServiceComponents/Advantages/Advantages"
import Cycle from "../components/SelfServiceComponents/Cycle/Cycle"
import DescriptionExtendedCycle from "../components/SelfServiceComponents/DescriptionExtendedCycle/DescriptionExtendedCycle"
import ExtendedCycle from "../components/SelfServiceComponents/ExtendedCycle/ExtendedCycle"
import HeightExtract from "../components/SelfServiceComponents/HighExtract/HighExtract"
import Poster from "../components/SelfServiceComponents/Poster/Poster"
import Reason from "../components/SelfServiceComponents/Reason/Reason"
import SimpleSlider from "../components/SelfServiceComponents/SectionHeaderSlider/SectionHeaderSlider"
import Layout from "../components/layout"

import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import { Discount } from "../components/Discount/Discount"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

const SelfService = () => {
  const data = useStaticQuery(
    graphql`
      query SeoSelfService {
        strapiSelfServicePage {
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
        title={data?.strapiSelfServicePage?.seo?.metaTitle}
        description={data?.strapiSelfServicePage?.seo?.metaDescription}
      />
      <SimpleSlider />
      <Discount />

      <Reason />
      <Cycle />
      <HeightExtract />
      <DescriptionExtendedCycle />
      <ExtendedCycle />
      <Poster />
      <Advantages />
    </Layout>
  )
}
export default SelfService
