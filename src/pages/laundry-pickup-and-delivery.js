import React from "react"
import { Areas } from "../components/Areas/Areas"
import { Discount } from "../components/Discount/Discount"
import SimpleTodo from "../components/SimpleTodo"
import { TablePricing } from "../components/TablePricing/TablePricing"
import { ThingsToKnow } from "../components/ThingsToKnow/ThingsToKnow"
import SectionHeaderLaundry from "../components/homePageComponents/sectionHeaderLaundry"
import Layout from "../components/layout"
export default function PickUp() {
  return (
    <Layout>
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
