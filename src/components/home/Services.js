import React from "react"
import styles from './services.module.scss'
import SERVICES from '../../constants/services'
import Title from "../UI/title/Title"

const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="our" subtitle="services" />
      <div className={styles.center}>
        {SERVICES.map((service, index) => {
          return (
            <article key={index} className={styles.service}>
              <span>{service.icon}</span>
              <h4>{service.title}</h4>
              <p>{service.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
