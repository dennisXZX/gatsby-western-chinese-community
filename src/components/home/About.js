import React from "react"
import Title from "../UI/title/Title"
import styles from "./about.module.scss"
import img from "../../images/defaultBcg.jpeg"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="关于" subtitle="我们" />

      <div className={styles.aboutCenter}>
        {/* Left Column */}
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="关于我们" />
          </div>
        </article>

        {/* Right Column */}
        <article className={styles.aboutInfo}>
          <h4>Lorem ipsum dolor</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis fugit ipsam?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis fugit ipsam?</p>

          <button type="button" className="btn-primary">read more</button>
        </article>
      </div>
    </section>
  )
}

export default About
