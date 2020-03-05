import React from "react"
import Layout from "../components/layout/Layout"
import Banner from "../components/banner/Banner"
import { graphql, Link } from "gatsby"
import About from "../components/home/About"
import Services from "../components/home/Services"
import StyledHero from "../components/styled-hero/StyledHero"

/** Page queries */
export const heroImageQuery = graphql`
    query {
        defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

const HomePage = ({ data }) => {
  // Extract the hero image from the GraphQL result
  const { fluid } = data.defaultBcg.childImageSharp

  return (
    <Layout>
      {/* Hero Section */}
      <StyledHero
        img={fluid}
        home={true}
      >
        <Banner
          title="西区华人之家"
          info="种种原因我们选择了澳洲，相信每一位的背后都经历了一个曲折的故事。澳洲——我们的第二家乡，希望大家能够一切顺利，快速融入澳洲的生活，融入澳洲的文化。在您无助、迷茫，需要帮助的时候，请记得“帮我热线”，048个5，找大王。">
          <Link to="/events" className="btn-white">浏览近期活动 >></Link>
        </Banner>
      </StyledHero>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />
    </Layout>
  )
}

export default HomePage
