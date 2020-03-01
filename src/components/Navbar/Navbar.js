import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.scss"
import { FaAlignRight } from "react-icons/fa"
import NAV_LINKS from "../../constants/nav-links"
import SOCIAL_ICONS from "../../constants/social-icons"
// import logo from "../images/logo.svg"

const Navbar = () => {
  const [isNavOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isNavOpen => !isNavOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          {/* Logo */}
          {/*<img src={logo} alt="Brisbane Western Suburbs Chinese Community logo"/>*/}
          <div>西区华人之家 Logo</div>

          {/* Hamburger Button */}
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>

        {/* Navigation Items */}
        <ul
          className={
            isNavOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {NAV_LINKS.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.path}>{link.text}</Link>
              </li>
            )
          })}
        </ul>

        {/* Social Icon Section */}
        <div className={styles.navSocialLinks}>
          {SOCIAL_ICONS.map((icon, index) => {
            return (
              <a
                key={index}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
