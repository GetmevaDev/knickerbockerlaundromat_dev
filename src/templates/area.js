import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/AreaPageComponents/Banner/Banner"
import TextBlock from "../components/AreaPageComponents/TextBlock/TextBlock"
import WhySaunders from "../components/AreaPageComponents/WhySaunders/WhySaunders"
import VisitUs from "../components/AreaPageComponents/VisitUs/VisitUs"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"

const Area = ({ data }) => {
  const area = data?.strapiAreas
  const title = area?.SEO?.metaTitle
  const description = area?.SEO?.metaDescription
  const image = area?.SEO?.metaImage?.publicURL

  const location = useLocation()

  const canonicalUrl = `https://saunderslaundromat.com${location.pathname}`

  return (
    <Layout>
      <Helmet
        defer={false}
        link={[
          {
            rel: "canonical",
            href: canonicalUrl,
          },
        ]}
        title={title}
        titleTemplate={title}
        meta={[
          {
            name: `description`,
            content: description,
          },
          {
            property: `og:image`,
            content: image,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            image: `twitter:image`,
            content: image,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: description,
          },
        ]}
      />
      {area.Topbar?.img?.[0]?.url && (
        <Banner
          title={area.Topbar.title}
          subtitle={area.Topbar.subtitle}
          imgUrl={area.Topbar.img[0].url}
        />
      )}
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
      SEO {
        metaDescription
        metaImage {
          publicURL
        }
        metaTitle
      }
      id
      slug
    }
  }
`

export default Area
