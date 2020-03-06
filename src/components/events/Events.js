import React from "react"
import EventList from "./EventList"
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
                            src
                        }
                    }
                    startDate
                }
            }
        }
    }
`

const Events = () => {
  const { events } = useStaticQuery(getEvents)

  return (
    <EventList events={events} />
  )
}

export default Events
