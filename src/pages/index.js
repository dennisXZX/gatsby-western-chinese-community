import React, { Component } from "react"
import Layout from "../components/Layout/Layout"
import SimpleHero from "../components/SimpleHero/SimpleHero"
import Banner from "../components/Banner/Banner"
import { Link } from "gatsby"

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <SimpleHero>
          <Banner
            title="西区华人之家"
            info="种种原因我们选择了澳洲，相信每一位的背后都经历了一个曲折的故事。澳洲——我们的第二家乡，希望大家能够一切顺利，快速融入澳洲的生活，融入澳洲的文化。在您无助、迷茫，需要帮助的时候，请记得“帮我热线”，048个5，找大王。">
            <Link to="/events" className="btn-white">浏览近期活动 >></Link>
          </Banner>
        </SimpleHero>
      </Layout>
    )
  }
}

export default HomePage
