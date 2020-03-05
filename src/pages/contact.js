import React from "react"
import Layout from "../components/layout/Layout"
import { graphql } from "gatsby"
import StyledHero from "../components/styled-hero/StyledHero"

/** Page queries */
export const heroImageQuery = graphql`
    query {
        contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

const ContactPage = ({ data }) => {
  // Extract the hero image from the GraphQL result
  const { fluid } = data.contactBcg.childImageSharp

  return (
    <Layout>
      <StyledHero img={fluid} />
    </Layout>
  )
}

export default ContactPage
