import React from "react"
import Layout from "../components/layout/Layout"
import { graphql } from "gatsby"
import StyledHero from "../components/styled-hero/StyledHero"

/** Page queries */
export const heroImageQuery = graphql`
    query {
        eventsBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

const EventPage = ({ data }) => {
  // Extract the hero image from the GraphQL result
  const { fluid } = data.eventsBcg.childImageSharp

  return (
    <Layout>
      <StyledHero img={fluid} />
    </Layout>
  )
}

export default EventPage
