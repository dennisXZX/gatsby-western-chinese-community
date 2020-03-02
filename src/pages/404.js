import React, { Component } from "react"
import Layout from "../components/Layout/Layout"
import Banner from "../components/Banner/Banner"
import { Link } from "gatsby"
import styles from "./404.module.scss"

class ErrorPage extends Component {
  render() {
    return (
      <Layout>
        <header className={styles.error}>
          <Banner title="您要找到页面消失啦～">
            <Link to="/" className="btn-white">
              回到首页 >>
            </Link>
          </Banner>
        </header>
      </Layout>
    )
  }
}

export default ErrorPage
