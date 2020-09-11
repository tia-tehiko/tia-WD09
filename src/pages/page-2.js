import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the Second page</h1>
    <p>Welcome to page 2</p>
    <p>If this is working does that mean im jamming on the jamstack?</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
