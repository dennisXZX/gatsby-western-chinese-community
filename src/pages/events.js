import React from "react"
import Layout from "../components/layout/Layout"
import { graphql } from "gatsby"
import StyledHero from "../components/styled-hero/StyledHero"

/** Page queries */
export const query = graphql`
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
  return (
    <Layout>
      <StyledHero img={data.eventsBcg.childImageSharp.fluid} />
    </Layout>
  )
}

export default EventPage
