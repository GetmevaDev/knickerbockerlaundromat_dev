import React from "react"
import { Discount } from "../components/Discount/Discount"
import DropOffServiceSectionHeader from "../components/DropOffServiceComponents/DropOffServiceSectionHeader/DropOffServiceSectionHeader"
import Posters from "../components/DropOffServiceComponents/Posters/Posters"
import Table from "../components/DropOffServiceComponents/Table/Table"
import Layout from "../components/layout"

const DropOffService = () => {
  return (
    <Layout>
      <DropOffServiceSectionHeader />
      <Discount />

      <Posters />
      <Table />
      {/* <EquipmentSection /> */}
    </Layout>
  )
}

export default DropOffService
