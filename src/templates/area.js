import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/AreaPageComponents/Banner/Banner"
import TextBlock from "../components/AreaPageComponents/TextBlock/TextBlock"
import WhySaunders from "../components/AreaPageComponents/WhySaunders/WhySaunders"
import VisitUs from "../components/AreaPageComponents/VisitUs/VisitUs"

const Area = ({ data }) => {
  const area = data.strapiAreas

  console.log(area)

  return (
    <Layout>
      {area.Topbar?.img?.[0]?.url && (
        <>
          <Banner
            title={area.Topbar.title}
            subtitle={area.Topbar.subtitle}
            imgUrl={area.Topbar.img[0].url}
          />
          <TextBlock
            mainTitle={area.MainTitle}
            mainText={area.MainText}
            ourServicesTitle={area.OurServicesTitle}
            ourServicesContent={area.OurServicesContent}
          />
          <WhySaunders
            title={area.WhySaunders.Title}
            reasons={area.WhySaunders.Reasons}
          />
          <VisitUs title={area.VisitUsTitle} content={area.VisitUsContent} />
        </>
      )}
    </Layout>
  )
}

export const query = graphql`
  query AreaQuery($slug: String!) {
    strapiAreas(slug: { eq: $slug }) {
      MainText
      MainTitle
      OurServicesContent
      OurServicesTitle
      VisitUsContent
      Topbar {
        img {
          url
        }
        id
        subtitle
        title
      }
      VisitUsTitle
      WhySaunders {
        Reasons
        Title
        id
      }
      id
      slug
    }
  }
`

export default Area
