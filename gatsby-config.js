module.exports = {
  siteMetadata: {
    description: `Cosmetic & Implant Dentistry: Massapequa, NY.`,
    image: "/image/share.png",
    author: `@gatsbyjs`,
    siteUrl: `https://saunderslaundromat.com`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://saunderslaundromat.com",
        sitemap: "https://saunderslaundromat.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "https://cms-knick-dev-71b6bbdd3892.herokuapp.com",
        // apiURL: "http://localhost:1337",
        // apiURL: process.env.DEPLOY_URL
        //   ? "https://cms-knick.herokuapp.com"
        //   : "http://localhost:1337",
        queryLimit: 1000, // Default to 100
        contentTypes: [`users`, `offers`, `equipments`, `advantages`, `areas`],
        //If using single types place them in this array.
        singleTypes: [
          `home-page`,
          `navigation-menu`,
          `contacts-and-location`,
          `social-media`,
          `self-service-page`,
          `drop-off-service`,
          `description-site`,
          `pick-up`,
          `pop-up-warning`,
        ],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Knickerbocker Laundromat`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
