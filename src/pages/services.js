import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Services from "../components/services"
import Paragraph from "../components/paragraph"


const ServicePage = () => (
  <Layout>
    <Seo title="Services" />
    <Paragraph />
    <Services />
  </Layout>
)

export default ServicePage