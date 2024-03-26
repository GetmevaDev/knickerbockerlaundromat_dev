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
import { useLocation } from "@reach/router"

function SEO({ description, lang, meta, image, title }) {
  const location = useLocation()

  const canonicalUrl = `https://saunderslaundromat.com${location.pathname}`

  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang,
      }}
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
          name: "robots",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },

        {
          name: `description`,
          content: description,
        },
        {
          property: `og:image`,
          content:
            "https://res.cloudinary.com/df5rxaf0s/image/upload/v1711284236/small_Saunders_Street_Laundromat_35493e9f59.png?87264.40000000596",
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
          content:
            "https://res.cloudinary.com/df5rxaf0s/image/upload/v1711284236/small_Saunders_Street_Laundromat_35493e9f59.png?87264.40000000596",
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
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
