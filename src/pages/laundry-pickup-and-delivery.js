import React from "react"
import Layout from "../components/layout"
import SectionHeaderLaundry from "../components/homePageComponents/sectionHeaderLaundry"
import EquipmentSection from "../components/homePageComponents/equipmentSection/EquipmentSection"
import SimpleTodo from "../components/SimpleTodo"
import Offer from "../components/OfferLaundry"
import { ThingsToKnow } from "../components/ThingsToKnow/ThingsToKnow"
import { Areas } from "../components/Areas/Areas"
import { TablePricing } from "../components/TablePricing/TablePricing"
export default function PickUp() {
  return (
    <Layout>
      <SectionHeaderLaundry />
      <Areas />
      <TablePricing />
      <ThingsToKnow />
      <SimpleTodo />
      {/* <Offer  */}
      {/* <EquipmentSection /> */}
    </Layout>
  )
}
