import React from "react"
import Layout from "../components/layout"
import DropOffServiceSectionHeader from "../components/DropOffServiceComponents/DropOffServiceSectionHeader/DropOffServiceSectionHeader"
import Posters from "../components/DropOffServiceComponents/Posters/Posters"
import Table from "../components/DropOffServiceComponents/Table/Table"
import EquipmentSection from "../components/homePageComponents/equipmentSection/EquipmentSection"

const DropOffService = () => {
  return (
    <Layout>
      <DropOffServiceSectionHeader />
      <Posters />
      <Table />
      {/* <EquipmentSection /> */}
    </Layout>
  )
}

export default DropOffService
