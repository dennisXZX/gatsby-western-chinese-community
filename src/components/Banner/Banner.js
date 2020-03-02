import React from "react"
import styles from "./banner.module.scss"

const Banner = ({ title, info, children }) => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.info}>{info}</p>
      {children}
    </div>
  )
}

export default Banner
