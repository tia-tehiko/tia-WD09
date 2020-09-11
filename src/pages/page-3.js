import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page Three" />
    <h1>Hi from the Third page</h1>
    <p>Welcome to page 3</p>
    <p>Im really not sure what Data im meant to put into these pages? But I made same pages and they techincally have data?</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
