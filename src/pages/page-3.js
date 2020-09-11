import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page Three" />
    <h1>Hi, I made this page</h1>
    <p>Welcome to page 3</p>
    <p>Im really not sure what Data im meant to put into these pages?</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
