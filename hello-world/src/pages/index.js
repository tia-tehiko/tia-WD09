import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Kia ora</h1>
    <p>How good is this prebuilt site?.</p>
    <p>Its the easy setup for me..</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/page-3/">Go to page 3</Link> <br />
    <Link to="/page-4/">Go to page 4</Link>
  </Layout>
)

export default IndexPage
