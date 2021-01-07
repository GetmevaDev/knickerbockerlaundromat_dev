import React from "react"
import Layout from "../components/layout"
import SimpleSlider from "../components/SelfServiceComponents/SectionHeaderSlider/SectionHeaderSlider"
import Reason from "../components/SelfServiceComponents/Reason/Reason"
import Cycle from "../components/SelfServiceComponents/Cycle/Cycle"
import HeightExtract from "../components/SelfServiceComponents/HighExtract/HighExtract"
import DescriptionExtendedCycle  from "../components/SelfServiceComponents/DescriptionExtendedCycle/DescriptionExtendedCycle"
import ExtendedCycle from "../components/SelfServiceComponents/ExtendedCycle/ExtendedCycle"
import Poster from "../components/SelfServiceComponents/Poster/Poster"
import Advantages from "../components/SelfServiceComponents/Advantages/Advantages"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SelfService = () => {
  return(
    <Layout>
      <SimpleSlider />
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