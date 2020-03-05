import React from "react"
import styles from "./contact.module.scss"
import Title from "../UI/title/Title"

const ContactForm = () => {
  return (
    <section className={styles.contact}>
      <Title title="联系" subtitle="我们" />

      <div className={styles.center}>
        <form action="">
          {/* Name Field */}
          <label htmlFor="name">name</label>
          <div>
            <input type="text"
                   name="name"
                   id="name"
                   className={styles.formControl}
                   placeholder="您的姓名"
            />
          </div>

          {/* Email Field */}
          <label htmlFor="email">email</label>
          <div>
            <input type="email"
                   name="email"
                   id="email"
                   className={styles.formControl}
                   placeholder="email@email.com"
            />
          </div>

          {/* Message Field */}
          <label htmlFor="message">message</label>
          <div>
            <textarea name="message"
                      id="message"
                      rows="10"
                      className={styles.formControl}
                      placeholder="您的留言"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <input type="submit" value="提交" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
