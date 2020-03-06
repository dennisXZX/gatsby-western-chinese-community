import React from "react"
import Event from "../events/Event"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../UI/title/Title"
import styles from "./upcoming-events.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getUpcomingEvents = graphql`
    query {
        event: allContentfulEvent(filter: { hasExpired: { eq: false } }) {
            edges {
                node {
                    name
                    slug
                    location
                    images {
                        fluid {
                            ...GatsbyContentfulFluid_tracedSVG
                        }
                    },
                    startDate
                }
            }
        }
    }
`

const UpcomingEvents = () => {
  const response = useStaticQuery(getUpcomingEvents)
  const upcomingEvents = response.event.edges

  return (
    <section className={styles.events}>
      <Title title="近期" subtitle="活动" />
      <div className={styles.center}>
        {upcomingEvents.map(({ node }) => {
          console.log('contentful_id', node);

          return <Event key={node.id} event={node} />
        })}
      </div>
      <AniLink fade to="/events" className="btn-primary">全部活动 >></AniLink>
    </section>
  )
}

export default UpcomingEvents
