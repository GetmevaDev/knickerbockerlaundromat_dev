/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */


exports.createPages = async function ({ actions, graphql }) {
  const data = await graphql(`
    {
      allStrapiAreas {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.data.allStrapiAreas.edges.forEach(({ node }) => {
    const slug = node.slug
    actions.createPage({
      path: `/areas-we-serve/${slug}`,
      component: require.resolve(`./src/templates/area.js`),
      context: { slug: slug },
    })
  })
}