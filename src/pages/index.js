import React, { Component } from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <Link to='/blog/'>Blog</Link>
      </Layout>
    )
  }
}

export default HomePage
