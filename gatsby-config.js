/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv")
  .config({
    path: `.env.${process.env.NODE_ENV}`,
  })

module.exports = {
  siteMetadata: {
    title: "西区华人之家",
    description: "布里斯班西区华人之家",
    author: "Dennis Xiao",
  },
  plugins: [
    // Add SASS support
    "gatsby-plugin-sass",
    // Add styled-component support
    "gatsby-plugin-styled-components",
    // Add image optimisation
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    // Add link transition effect
    "gatsby-plugin-transition-link",
    // Add Prisma playground at http://localhost:8000/___playground
    "gatsby-plugin-playground",
    // Load local file using GraphQL
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      }
    },
    // Add Contentful headless CMS support
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    }
  ],
}
