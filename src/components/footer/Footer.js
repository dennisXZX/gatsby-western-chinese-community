import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import NAV_LINKS from "../../constants/nav-links"
import SOCIAL_ICONS from "../../constants/social-icons"
import styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Navigation Items */}
      <div className={styles.links}>
        {NAV_LINKS.map((link, index) => (
          <AniLink
            fade
            key={index}
            to={link.path}
            aria-label="navigate the page"
          >
            {link.text}
          </AniLink>
        ))}
      </div>

      {/* Social Icons */}
      <div className={styles.icons}>
        {SOCIAL_ICONS.map((icon, index) => {
          return (
            <a
              key={index}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="navigate to social media"
            >
              {icon.icon}
            </a>
          )
        })}
      </div>

      {/* Copy Right Info */}
      <div className={styles.copyright}>
        copyright &copy; Brisbane western Chinese community {new Date().getFullYear()}.
        all rights reserved
      </div>
    </footer>
  )
}

export default Footer
