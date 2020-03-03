/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "西区华人之家",
    description: "布里斯班西区华人之家",
    author: "Dennis Xiao",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      }
    }
  ],
}
