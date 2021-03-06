import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Services from "../components/services"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    {/* <Services heading="Our Services"/>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
