/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const data = useStaticQuery(
    graphql`
      query {
          strapiDescriptionSite {
              Title
              Description
              Image {
                  childImageSharp {
                      fixed(width: 300) {
                          ...GatsbyImageSharpFixed
                      }
                  }
              }
          }
      }
    `
  )

  const metaDescription = description || data.strapiDescriptionSite.Description
  const defaultTitle = data.strapiDescriptionSite.Title
  const imageData = data.strapiDescriptionSite.Image && data.strapiDescriptionSite.Image !== null ?
    data.strapiDescriptionSite.Image.childImageSharp.fixed.src : "";

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={defaultTitle}
      titleTemplate={defaultTitle ? `%s | ${metaDescription}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: imageData,
        },
        {
          property: `og:title`,
          content: defaultTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
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
          content: imageData,
        },
        {
          name: `twitter:title`,
          content: defaultTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
