import React, { Component } from "react"
import Layout from "../components/layout/Layout"
import Banner from "../components/banner/Banner"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "./styles/404.module.scss"

class ErrorPage extends Component {
  render() {
    return (
      <Layout>
        <header className={styles.error}>
          <Banner title="您要找到页面消失啦～">
            <AniLink fade to="/" className="btn-white">
              回到首页 >>
            </AniLink>
          </Banner>
        </header>
      </Layout>
    )
  }
}

export default ErrorPage
