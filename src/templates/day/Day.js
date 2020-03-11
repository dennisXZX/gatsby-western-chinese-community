import React, { useState } from "react"
import { FaAngleDown } from "react-icons/fa"
import styles from "./day.module.scss"

const Day = ({ time, details }) => {
  const [isShowingDetails, setIsShowingDetails] = useState(false)

  /** Toggle event details */
  const toggleDetails = () => {
    setIsShowingDetails(prevIsShowingDetailsValue => !prevIsShowingDetailsValue)
  }

  return (
    <article className={styles.day}>
      <h4>
        {time}
        <button className={styles.btn}>
          <FaAngleDown onClick={toggleDetails} />
        </button>
      </h4>

      {isShowingDetails && <p>{details}</p>}
    </article>
  )
}

export default Day
