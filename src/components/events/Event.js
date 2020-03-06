import React from "react"
import Image from "gatsby-image"
import styles from "./event.module.scss"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Event = ({ event }) => {
  const { name, slug, location, images, startDate } = event
  const mainImage = images[0].fluid

  return (
    <article className={styles.event}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="活动" />
        <AniLink fade className={styles.link} to={`/event/${slug}`}>details</AniLink>
      </div>

      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {location}
          </h4>

          <div className={styles.details}>
            <h6>{startDate}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Event
