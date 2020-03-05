import React from "react"
import Layout from "../components/layout/Layout"
import { graphql } from "gatsby"
import StyledHero from "../components/styled-hero/StyledHero"

/** Page queries */
export const heroImageQuery = graphql`
    query {
        blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

const BlogPage = ({ data }) => {
  // Extract the hero image from the GraphQL result
  const { fluid } = data.blogBcg.childImageSharp

  return (
    <Layout>
      <StyledHero img={fluid} />
    </Layout>
  )
}

export default BlogPage
