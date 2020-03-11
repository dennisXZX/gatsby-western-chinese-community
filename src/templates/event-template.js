import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import StyledHero from "../components/styled-hero/StyledHero"
import styles from "./template.module.scss"
import Img from "gatsby-image"
import { FaMap } from "react-icons/fa"
import Day from "./day/Day"
import AnriLink from "gatsby-plugin-transition-link/AniLink"

export const pageQuery = graphql`
    query($slug: String!) {
        event: contentfulEvent(slug: { eq: $slug }) {
            name
            location
            description {
                description
            }
            schedule {
                time
                details
            }
            images {
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
            startDate
        }
    }
`

const EventTemplate = ({ data }) => {
  const { name, location, description: { description }, startDate, images, schedule } = data.event
  const [mainImage, ...eventImages] = images

  return (
    <Layout>
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {
              eventImages.map((item, index) => {
                return (
                  <Img key={index} fluid={item.fluid} alt="event" className={styles.image} />
                )
              })
            }
          </div>

          <h2>{name}</h2>

          <div className={styles.info}>
            <p>
              <FaMap className={styles.icon} />
              {location}
            </p>
          </div>

          <h4>starts on: {startDate}</h4>

          <p className={styles.desc}>{description}</p>

          <h2>daily schedule</h2>
          <div className={styles.journey}>
            {schedule.map(item => {
              return <Day key={item.id} time={item.time} details={item.details} />
            })}
          </div>

          <AnriLink fade to="/events" className="btn-primary">全部活动 >></AnriLink>
        </div>
      </section>
    </Layout>
  )
}


export default EventTemplate
