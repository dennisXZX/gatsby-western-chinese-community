const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      events: allContentfulEvent {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // Iterate each event
  data.events.edges.forEach(({ node }) => {
    createPage({
      path: `events/${node.slug}`,
      component: path.resolve("./src/templates/event-template.js"),
      context: {
        slug: node.slug
      }
    })
  })
}
