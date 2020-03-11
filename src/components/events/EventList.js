import React from "react"
import styles from "../home/events.module.scss"
import Event from "./Event"
import Title from "../UI/title/Title"
import { useStaticQuery, graphql } from "gatsby"

const getEvents = graphql`
    query {
        events: allContentfulEvent {
            edges {
                node {
                    name
                    slug
                    location
                    images {
                        fluid {
                            ...GatsbyContentfulFluid_tracedSVG
                        }
                    }
                    startDate(formatString: "DD/MM/Y")
                }
            }
        }
    }
`

const EventList = () => {
  const { events } = useStaticQuery(getEvents)

  return (
    <section className={styles.events}>
      <Title title="全部" subtitle="活动" />
      <div className={styles.center}>
        {
          events.edges.map(({ node }) => <Event key={node.id} event={node} />)
        }
      </div>
    </section>
  )
}

export default EventList
