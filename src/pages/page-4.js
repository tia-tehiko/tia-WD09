import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FourthPage = () => (
  <Layout>
    <SEO title="Page Three" />
    <h1>& this one </h1>
    <p>Welcome to page 4</p>
    <p>If this isn't right I can definitely fix it lol</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FourthPage

